import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { TradingPairTitle } from "../tradingPair/TradingPairTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
