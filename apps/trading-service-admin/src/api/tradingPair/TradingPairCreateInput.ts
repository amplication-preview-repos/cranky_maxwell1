import { OrderCreateNestedManyWithoutTradingPairsInput } from "./OrderCreateNestedManyWithoutTradingPairsInput";

export type TradingPairCreateInput = {
  baseCurrency?: string | null;
  orders?: OrderCreateNestedManyWithoutTradingPairsInput;
  quoteCurrency?: string | null;
};
