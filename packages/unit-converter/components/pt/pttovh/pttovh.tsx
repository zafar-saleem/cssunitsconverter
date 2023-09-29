import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PTToVH = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("pttovh");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="pt" {...props} updateParentState={updateValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        {/* <Input name="vw" label="view port height in px" {...props} updateParentState={updateAssumedValue} /> */}
        <Separator>⤳</Separator>
        {/* @ts-ignore */}
        <Input name="em" label="vh" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
