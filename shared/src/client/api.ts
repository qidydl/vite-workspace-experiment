import axios from "axios";

/** The shared API client. */
export const client = axios.create();

/** The API wrapper. */
export const api = {
    /**
     * Get the length of the data at a URL.
     * @param uri The URL to request.
     * @param signal Optional abort signal to cancel the request.
     * @returns The length of the data at the URL.
     */
    getLength: async (uri: string, signal?: AbortSignal) => (await client.get<string>(uri, { signal })).data.length,
};
