import { SpawnOptions, spawn } from "child_process";
import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import react from "@vitejs/plugin-react";

function spawnAsync(command: string, args: readonly string[], options: SpawnOptions) {
    return new Promise<void>((resolve, reject) => {
        const process = spawn(command, args, options);
        process.on("error", reject);
        process.on("close", (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`child exited with code ${code}`));
            }
        });
    });
}

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
    let https = undefined;

    if (command === "serve") {
        // Set up HTTPS for the application using HTTPS certificates from ASP.NET Core

        // Base folder set based on Windows or Linux
        const baseFolder = process.env.APPDATA
            ? `${process.env.APPDATA}/ASP.NET/https`
            : `${process.env.HOME}/.aspnet/https`;

        const certFilePath = path.join(baseFolder, "qidydl-app.pem");
        const keyFilePath = path.join(baseFolder, "qidydl-app.key");

        if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
            await spawnAsync(
                "dotnet",
                ["dev-certs", "https", "--export-path", certFilePath, "--format", "Pem", "--no-password"],
                {
                    stdio: "inherit",
                }
            );
        }

        https = {
            cert: fs.readFileSync(certFilePath),
            key: fs.readFileSync(keyFilePath),
        };

        console.log("Using HTTPS via", certFilePath);
    }

    return {
        plugins: [react()],
        css: {
            preprocessorOptions: {
                less: {
                    // antd 4.x requires this
                    javascriptEnabled: true,
                },
            },
        },
        server: {
            port: 5000,
            https,
        },
    };
});
