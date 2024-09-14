import { TradingPairWhereInput } from "./TradingPairWhereInput";
import { TradingPairOrderByInput } from "./TradingPairOrderByInput";

export type TradingPairFindManyArgs = {
  where?: TradingPairWhereInput;
  orderBy?: Array<TradingPairOrderByInput>;
  skip?: number;
  take?: number;
};
