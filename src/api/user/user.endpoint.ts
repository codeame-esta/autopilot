import { defineEndpoint } from "../api-contract";
import type { GetMeResponse } from "./types";

export const getMe = defineEndpoint<undefined, undefined, undefined, GetMeResponse>({
  method: "GET",
  path: "/users/me",
  requiresAuth: true,
});
