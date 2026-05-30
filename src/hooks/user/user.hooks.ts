import { createQueryHook } from "@/api/api-hooks";
import { getMe } from "@/api/user/user.endpoint";

export const useGetMe = createQueryHook(getMe);
// export const useCreateUser = createMutationHook(createUser);
