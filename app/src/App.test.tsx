import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { accessibilityViolationsCheck } from "setupTests";
import { api } from "@qidydl/shared/client";
import { render, screen, waitFor } from "@testing-library/react";
import App from "App";
import userEvent from "@testing-library/user-event";

let component: HTMLElement | undefined;

function renderComponent() {
    const qc = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });

    component = render(
        <QueryClientProvider client={qc}>
            <App />
        </QueryClientProvider>,
    ).container;
}

describe("The application", () => {
    it("displays text from multiple sources", async () => {
        renderComponent();

        expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeVisible();
        expect(screen.getByText(/This is a shared component\./)).toBeVisible();
        expect(screen.getByText(/This is a shared component too with hot-reloading changes/)).toBeVisible();

        await accessibilityViolationsCheck(component);
    });

    it("displays data length", async () => {
        const getLengthMock = vi.spyOn(api, "getLength").mockResolvedValue(123);

        renderComponent();

        await userEvent.click(screen.getByRole("button", { name: /Data length/i }));
        await waitFor(() => expect(getLengthMock).toBeCalled());
        expect(screen.getByRole("button", { name: /Data length/i })).toHaveTextContent(/123/);
    });
});
