import React from "react";
import { mapCalculation } from "./map-calculations";

export const useConverter = (type: any) => {
  const [userFirstValue, updateUserFirstValue] = React.useState<number>(0);
  const [userSecondValue, updateUserSecondValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();

  const calculate = React.useCallback(() => {
    updateResult(mapCalculation[type]({
      pxValue: userFirstValue,
      pxTotalValue: userSecondValue,
    }));
  }, [userFirstValue, userSecondValue]);

  return {
    userFirstValue,
    updateUserFirstValue,
    updateUserSecondValue,
    result,
    calculate,
  }
}
