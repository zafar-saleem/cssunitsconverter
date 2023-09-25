import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PxToEM = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    result,
    calculate,
  } = useConverter("pxtoem");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="px" {...props} updateParentState={updateUserFirstValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="em" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
