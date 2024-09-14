import { TradingPairWhereUniqueInput } from "../tradingPair/TradingPairWhereUniqueInput";

export type OrderUpdateInput = {
  amount?: number | null;
  price?: number | null;
  status?: "Option1" | null;
  tradingPair?: TradingPairWhereUniqueInput | null;
};
