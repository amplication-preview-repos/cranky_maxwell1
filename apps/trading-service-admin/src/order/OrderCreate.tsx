import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TradingPairTitle } from "../tradingPair/TradingPairTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="price" source="price" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="tradingPair.id"
          reference="TradingPair"
          label="tradingPair"
        >
          <SelectInput optionText={TradingPairTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
