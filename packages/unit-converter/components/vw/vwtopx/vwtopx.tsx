import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";
import * as Styled from "../../styled/components.styled";

export const VWToPX = ({ ...props }) => {
  const { 
    updateValue,
    updateAssumedValue,
    result,
    calculate,
  } = useConverter("vwtopx");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vw" {...props} updateParentState={updateValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        <Input name="vw" label="px (your viewport width in pixels)" {...props} updateParentState={updateAssumedValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="px" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
