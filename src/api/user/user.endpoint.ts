import type { Endpoint } from '../api-contract';

export const getUser = {
  method: 'GET',
  path: '/users/:id',
} as const satisfies Endpoint<
  { id: string },
  undefined,
  undefined,
  { id: string; name: string }
>;

export const createUser = {
  method: 'POST',
  path: '/users',
} as const satisfies Endpoint<
  undefined,
  undefined,
  { name: string },
  { id: string; name: string }
>;
