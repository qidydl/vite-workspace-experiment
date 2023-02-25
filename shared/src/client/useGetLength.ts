import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { api } from "./api.js";
//NOTE: File extensions are required for exported code: see https://github.com/microsoft/TypeScript/issues/16577

type Options = UseQueryOptions<number, unknown, number, string[]>;

/**
 * Query helper to get length information.
 * @param uri The URI to get length information for.
 * @param options Options to configure the query.
 * @returns React-Query properties.
 */
export function useGetLength(uri: string, options?: Options) {
    return useQuery(["getLength", uri], async (context) => await api.getLength(uri, context.signal), options);
}
