export type Endpoint<
  TParams = unknown,
  TQuery = unknown,
  TBody = unknown,
  TResponse = unknown,
> = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  params?: TParams;
  query?: TQuery;
  body?: TBody;
  response?: TResponse;
};
