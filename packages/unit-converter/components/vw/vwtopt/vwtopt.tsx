import Input from "@/input"
import Flex from "@utils/flex"
import Separator from "@utils/separator"
import React from "react";
import { Calculate } from "@/calculate-btn";

export const VWToPT = ({ ...props }) => {
  const [userFirstValue, updateUserFirstValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();
  
  const calculate = () => {
    // if (userFirstValue) {
    //   const total = userFirstValue * 0.0625;
    //   updateResult(total);
    // }
  };
  
  return (
    <>
      <Flex direction="row">
        <Input name="pixels" label="vw" {...props} updateParentState={updateUserFirstValue} />
        <Separator>⤳</Separator>
        <Input name="em" label="pt" lock value={result} />
      </Flex>
      <Calculate parentAction={calculate}>Calculate</Calculate>
    </>
  )
}
