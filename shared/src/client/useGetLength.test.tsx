import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api } from "./api";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetLength } from "./useGetLength";

function runHook(uri: string) {
    //NOTE: We should always disable retries for test performance
    const qc = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
        },
    });
    const { result } = renderHook(() => useGetLength(uri), {
        wrapper: ({ children }) => <QueryClientProvider client={qc}>{children}</QueryClientProvider>,
    });
    return result;
}

describe("useGetLength Hook", () => {
    it("behaves normally", async () => {
        const getLengthMock = vi.spyOn(api, "getLength").mockResolvedValue(123);

        const result = runHook("https://test");

        await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
        expect(getLengthMock).toHaveBeenCalledOnce();
        expect(getLengthMock).toHaveBeenCalledWith("https://test", expect.any(AbortSignal));
        expect(result.current.data).toBe(123);
    });
});
