import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import { useConverter } from "../../hooks/useConverter";

export const PCToVH = ({ ...props }) => {
  const { 
    updateUserFirstValue,
    result,
    calculate,
  } = useConverter("pctovh");
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="pc" {...props} updateParentState={updateUserFirstValue} />
        {/* <Styled.Label>out of</Styled.Label> */}
        {/* <Input name="vw" label="pc" {...props} updateParentState={updateUserSecondValue} /> */}
        <Separator>⤳</Separator>
        <Input name="em" label="vh (based on 1pc represent 1% of view port height)" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
