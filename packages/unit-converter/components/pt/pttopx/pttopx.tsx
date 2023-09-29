import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";
// import * as Styled from "../styled/components.styled";

export const PTToPX = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("pttopx");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="pt" {...props} updateParentState={updateValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="px" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
