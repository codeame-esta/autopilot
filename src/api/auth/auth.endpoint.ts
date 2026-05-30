import { defineEndpoint } from "../api-contract";

export const authenticate = defineEndpoint<
  undefined,
  undefined,
  { email: string; password: string },
  { id: string; name: string }
>({
  method: "POST",
  path: "/auth/login",
});
