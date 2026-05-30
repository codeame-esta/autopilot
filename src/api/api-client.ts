import axios from "axios";
import { supabase } from "@/lib/supabase";
import type { Endpoint } from "./api-contract";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export type RequestConfig<TParams, TQuery, TBody> = {
  params?: TParams;
  query?: TQuery;
  body?: TBody;
};

function buildUrl(path: string, params?: Record<string, string>) {
  if (!params) return path;

  return Object.keys(params).reduce((acc, key) => {
    return acc.replace(`:${key}`, params[key]);
  }, path);
}

export async function request<
  TParams extends Record<string, string> | undefined,
  TQuery,
  TBody,
  TResponse,
>(
  endpoint: Endpoint<TParams, TQuery, TBody, TResponse>,
  config?: RequestConfig<TParams, TQuery, TBody>,
): Promise<TResponse> {
  const url = buildUrl(endpoint.path, config?.params);

  let authHeaders: Record<string, string> = {};

  if (endpoint.requiresAuth) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.access_token) {
      authHeaders = { Authorization: `Bearer ${session.access_token}` };
    }
  }

  const response = await api.request<TResponse>({
    method: endpoint.method,
    url,
    params: config?.query,
    data: config?.body,
    headers: authHeaders,
  });

  return response.data;
}
