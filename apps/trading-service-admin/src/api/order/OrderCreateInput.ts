import { TradingPairWhereUniqueInput } from "../tradingPair/TradingPairWhereUniqueInput";

export type OrderCreateInput = {
  amount?: number | null;
  price?: number | null;
  status?: "Option1" | null;
  tradingPair?: TradingPairWhereUniqueInput | null;
};
