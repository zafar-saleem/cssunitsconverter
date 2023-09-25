import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const RemToVH = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    updateUserSecondValue,
    result,
    calculate,
  } = useConverter("remtovh");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="rem" {...props} updateParentState={updateUserFirstValue} />
        <Input name="px" label="size in px" {...props} updateParentState={updateUserSecondValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="vh" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
