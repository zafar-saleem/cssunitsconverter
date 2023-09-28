import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PTToPC = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    result,
    calculate,
  } = useConverter("pttopc");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="pt" {...props} updateParentState={updateUserFirstValue} />
        <Separator>⤳</Separator>
        {/* @ts-ignore */}
        <Input name="em" label="pc" lock value={result?.toFixed(4)} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
