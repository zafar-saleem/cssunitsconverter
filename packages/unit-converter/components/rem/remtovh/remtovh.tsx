import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const RemToVH = ({ ...props }) => {
  const { 
    updateValue,
    updateAssumedValue,
    result,
    calculate,
  } = useConverter("remtovh");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="rem" {...props} updateParentState={updateValue} />
        <Input name="px" label="size in px" {...props} updateParentState={updateAssumedValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="vh" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
