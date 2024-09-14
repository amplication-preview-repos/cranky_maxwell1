import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
