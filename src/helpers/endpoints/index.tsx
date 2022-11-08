import { auth } from './auth';
import { order } from './order';
import { product } from './product';
import { user } from './user';

export const endpoint = {
    baseUrl: "http://localhost:3333/api",
    ...auth,
    ...user,
    ...order,
    ...product,
};