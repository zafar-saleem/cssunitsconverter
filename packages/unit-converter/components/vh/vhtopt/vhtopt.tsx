import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";

export const VHToPT = ({ ...props }) => {
  const [value, updateValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();
  
  const calculate = () => {
    // if (value) {
    //   const total = value * 0.0625;
    //   updateResult(total);
    // }
  };
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vh" {...props} updateParentState={updateValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="pt" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
