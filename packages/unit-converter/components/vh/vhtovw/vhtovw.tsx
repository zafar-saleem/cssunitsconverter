import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import * as Styled from "../../styled/components.styled";

export const VHToVW = ({ ...props }) => {
  const [value, updateValue] = React.useState<number>(0);
  const [assumedValue, updateAssumedValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>(0);

  const calculate = () => {
    // if (value && assumedValue) {
    //   const total = (value / assumedValue) * 100;
    //   updateResult(parseFloat(total.toFixed(4)));
    // }
  };
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vh" {...props} updateParentState={updateValue} />
        <Styled.Label>out of</Styled.Label>
        <Input name="vw" label="vh" {...props} updateParentState={updateAssumedValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="vw" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
