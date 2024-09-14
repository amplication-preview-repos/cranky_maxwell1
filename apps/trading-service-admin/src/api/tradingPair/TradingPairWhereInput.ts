import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type TradingPairWhereInput = {
  baseCurrency?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  quoteCurrency?: StringNullableFilter;
};
