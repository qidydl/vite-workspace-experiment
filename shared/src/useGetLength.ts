import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { api } from "./api";
// NOTE: We *have* to use a relative import here for `api`, because when this is imported from `app`, it needs to be
// resolved relative to this file, not relative to `app`!

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
