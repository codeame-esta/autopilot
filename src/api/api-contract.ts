export type Endpoint<
  TParams = undefined,
  TQuery = undefined,
  TBody = undefined,
  TResponse = unknown,
> = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  requiresAuth?: boolean;
  _phantom?: [TParams, TQuery, TBody, TResponse];
};

export function defineEndpoint<
  TParams = undefined,
  TQuery = undefined,
  TBody = undefined,
  TResponse = unknown,
>(
  endpoint: Endpoint<TParams, TQuery, TBody, TResponse>,
): Endpoint<TParams, TQuery, TBody, TResponse> {
  return endpoint;
}
