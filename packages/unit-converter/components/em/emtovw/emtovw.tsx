import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const EMToVW = ({ ...props }) => {
  const { 
    updateValue,
    updateAssumedValue,
    result,
    calculate,
  } = useConverter("emtovw");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="em" {...props} updateParentState={updateValue} />
        <Input name="px" label="View Port size in em" {...props} updateParentState={updateAssumedValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="vw" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
