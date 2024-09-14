import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  tradingPairId?: SortOrder;
  updatedAt?: SortOrder;
};
