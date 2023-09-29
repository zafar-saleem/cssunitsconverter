import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const VWToVH = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("vwtovh");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vw" {...props} updateParentState={updateValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        {/* <Input name="vw" label="vw" {...props} updateParentState={updateAssumedValue} /> */}
        <Separator>⤳</Separator>
        <Input name="em" label="vh" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
