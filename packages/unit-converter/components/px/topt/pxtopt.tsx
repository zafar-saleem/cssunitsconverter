import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PxToPT = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("pxtopt");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="px" {...props} updateParentState={updateValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="pt" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
