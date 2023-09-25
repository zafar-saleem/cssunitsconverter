import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const RemToEm = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    result,
    calculate,
  } = useConverter("remtoem");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="rem" {...props} updateParentState={updateUserFirstValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="em" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
