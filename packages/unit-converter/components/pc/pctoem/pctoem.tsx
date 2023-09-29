import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";

export const PCToEM = ({ ...props }) => {
  const [value, updateValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();

  const calculate = React.useCallback(() => {
    // if (value) {
    //   const total = (value / 16);
    //   updateResult(total);
    // }
  }, [value]);
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="pc" {...props} updateParentState={updateValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="em" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
