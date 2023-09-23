import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";

export const EMToVW = ({ ...props }) => {
  const [userFirstValue, updateUserFirstValue] = React.useState<number>(0);
  const [userSizeValue, updateUserSizeValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();

  const calculate = React.useCallback(() => {
    if (userFirstValue && userSizeValue) {
      // const total = ((userFirstValue * 16) / userSizeValue) * 100;
      // // @ts-ignore
      // updateResult(total.toFixed(4));
    }
  }, [userFirstValue, userSizeValue]);
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="em" {...props} updateParentState={updateUserFirstValue} />
        <Input name="px" label="size in px" {...props} updateParentState={updateUserSizeValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="vw" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
