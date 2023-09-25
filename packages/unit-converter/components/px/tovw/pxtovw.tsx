import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import * as Styled from "../../styled/components.styled";
import { useConverter } from "../../hooks/useConverter";

export const PxToVW = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    updateUserSecondValue,
    result,
    calculate,
  } = useConverter("pxtovw");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="px" {...props} updateParentState={updateUserFirstValue} />
        <Styled.Label>out of</Styled.Label>
        <Input name="vw" label="px" {...props} updateParentState={updateUserSecondValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="vw" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
