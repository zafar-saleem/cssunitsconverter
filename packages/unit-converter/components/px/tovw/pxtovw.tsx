import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";
import * as Styled from "../../styled/components.styled";

export const PxToVW = ({ ...props }) => {
  const [userFirstValue, updateUserFirstValue] = React.useState<number>(0);
  const [userSecondValue, updateUserSecondValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();

  const calculate = React.useCallback(() => {
    if (userFirstValue && userSecondValue) {
      const total = (userFirstValue / userSecondValue) * 100;
      updateResult(total);
    }
  }, [userFirstValue, userSecondValue]);
  
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
