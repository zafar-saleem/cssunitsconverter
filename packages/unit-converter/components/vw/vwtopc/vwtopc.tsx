import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const VWToPC = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    updateUserSecondValue,
    result,
    calculate,
  } = useConverter("vwtopc");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vw" {...props} updateParentState={updateUserFirstValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        <Input name="vw" label="pc (viewport width in picas)" {...props} updateParentState={updateUserSecondValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="pc (based on font size of 12pt & a character width of 1 pica)" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
