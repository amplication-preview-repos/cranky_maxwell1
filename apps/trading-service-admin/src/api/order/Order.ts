import { TradingPair } from "../tradingPair/TradingPair";

export type Order = {
  amount: number | null;
  createdAt: Date;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  tradingPair?: TradingPair | null;
  updatedAt: Date;
};
