import { OrderUpdateManyWithoutTradingPairsInput } from "./OrderUpdateManyWithoutTradingPairsInput";

export type TradingPairUpdateInput = {
  baseCurrency?: string | null;
  orders?: OrderUpdateManyWithoutTradingPairsInput;
  quoteCurrency?: string | null;
};
