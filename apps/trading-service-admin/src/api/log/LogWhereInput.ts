import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LogWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  message?: StringNullableFilter;
};
