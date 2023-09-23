import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";

export const EMToPC = ({ ...props }) => {
  const [userFirstValue, updateUserFirstValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();

  const calculate = React.useCallback(() => {
    if (userFirstValue) {
      // const total = userFirstValue * 0.4167;
      // updateResult(total);
    }
  }, [userFirstValue]);
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="em" {...props} updateParentState={updateUserFirstValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="pc" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
