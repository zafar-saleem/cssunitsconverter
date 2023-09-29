import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PCToVW = ({ ...props }) => {
  const { 
    updateValue,
    result,
    calculate,
  } = useConverter("pctovw");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="pc" {...props} updateParentState={updateValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        {/* <Input name="vw" label="pc that represent % of the viewport width" {...props} updateParentState={updateAssumedValue} /> */}
        <Separator>⤳</Separator>
        <Input name="em" label="vw (based on 1pc represent 1% of view port width)" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
