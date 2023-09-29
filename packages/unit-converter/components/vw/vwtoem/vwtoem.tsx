import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const VWToEM = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("vwtoem");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vw" {...props} updateParentState={updateValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="em (based on font size 16px)" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
