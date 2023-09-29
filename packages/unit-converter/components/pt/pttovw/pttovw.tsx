import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PTToVW = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("pttovw");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="view port width in px" {...props} updateParentState={updateValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        {/* <Input name="vw" label="pt" {...props} updateParentState={updateAssumedValue} /> */}
        <Separator>⤳</Separator>
        <Input name="em" label="vw" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
