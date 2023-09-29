import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
// import * as Styled from "../styled/components.styled";

export const VHToPX = ({ ...props }) => {
  const [value, updateValue] = React.useState<number>(0);
  // const [assumedValue, updateAssumedValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();
  // pt = px * ( 72pt / 96 )
  const calculate = () => {
    // if (value) {
    //   const total = (value) * (72 / 96);
    //   updateResult(total);
    // }
  };
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vw" {...props} updateParentState={updateValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="px" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
