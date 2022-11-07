import { auth } from './auth';
import { order } from './order';
import { product } from './product';
import { user } from './user';

export const endpoint = {
    baseUrl: "https://perfumaria-server-production-fbb6.up.railway.app/api",
    ...auth,
    ...user,
    ...order,
    ...product,
};