import { createMutationHook, createQueryHook } from '@/api/api-hooks';
import { createUser, getUser } from '@/api/user/user.endpoint';

export const useGetUser = createQueryHook(getUser);
export const useCreateUser = createMutationHook(createUser);
