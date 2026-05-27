import { useQuery, useMutation } from '@tanstack/react-query';
import type { Endpoint } from './api-contract';
import { request, type RequestConfig } from './api-client';

export function createQueryHook<
  TParams extends Record<string, string> | undefined,
  TQuery,
  TBody,
  TResponse,
>(endpoint: Endpoint<TParams, TQuery, TBody, TResponse>) {
  return (config?: RequestConfig<TParams, TQuery, TBody>) =>
    useQuery({
      queryKey: [endpoint.path, config],
      queryFn: () => request(endpoint, config),
    });
}

export function createMutationHook<
  TParams extends Record<string, string> | undefined,
  TQuery,
  TBody,
  TResponse,
>(endpoint: Endpoint<TParams, TQuery, TBody, TResponse>) {
  return () =>
    useMutation({
      mutationFn: (config: RequestConfig<TParams, TQuery, TBody>) =>
        request(endpoint, config),
    });
}
