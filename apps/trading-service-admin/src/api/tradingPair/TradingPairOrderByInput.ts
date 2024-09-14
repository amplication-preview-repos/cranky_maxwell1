import { SortOrder } from "../../util/SortOrder";

export type TradingPairOrderByInput = {
  baseCurrency?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  quoteCurrency?: SortOrder;
  updatedAt?: SortOrder;
};
