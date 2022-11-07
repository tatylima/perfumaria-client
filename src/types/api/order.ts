import { OrderItemType } from "types/OrderItemType";

export interface Order {
  userId: string;
  products: OrderItemType[];
}