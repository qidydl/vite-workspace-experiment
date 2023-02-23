import "./App.css";
import "./styles/ant-theme.less";
import { Button, PageHeader } from "antd";
import { Demo } from "@qidydl/shared";
import { Shared } from "@qidydl/shared/src/Shared";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

// IMPORTANT LESSON: Note that if you change the Demo component in shared, it will not hot-reload unless you do
// `pnpm start` in the shared folder at the same time as you do it in the app folder, because it's being imported from
// the dist output. However, the Shared component will hot reload because we import the source directly.

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <PageHeader title="Demo Page with antd" />

            <div className="App">
                <div>
                    <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
                        <img src="/vite.svg" className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
                <Demo />
                <Shared />
            </div>
        </>
    );
};

export default App;
