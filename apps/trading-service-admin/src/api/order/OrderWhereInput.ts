import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TradingPairWhereUniqueInput } from "../tradingPair/TradingPairWhereUniqueInput";

export type OrderWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
  tradingPair?: TradingPairWhereUniqueInput;
};
