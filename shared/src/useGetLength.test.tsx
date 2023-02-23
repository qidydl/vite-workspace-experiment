import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api } from "api";
import { renderHook } from "@testing-library/react";
import { useGetLength } from "useGetLength";

function runHook(uri: string) {
    const qc = new QueryClient();
    const { result } = renderHook(() => useGetLength(uri), {
        wrapper: ({ children }) => <QueryClientProvider client={qc}>{children}</QueryClientProvider>,
    });
    return result;
}

describe("useGetLength Hook", () => {
    it("does something", () => {
        //const getLengthMock = vi.spyOn(api, "getLength").mockResolvedValue(123);

        const result = runHook("https://test");

        expect(result.current.data).toBe(123);
        //expect(getLengthMock).toHaveBeenCalledOnce();
    });
});
