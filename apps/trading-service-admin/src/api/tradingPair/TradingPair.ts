import { Order } from "../order/Order";

export type TradingPair = {
  baseCurrency: string | null;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  quoteCurrency: string | null;
  updatedAt: Date;
};
