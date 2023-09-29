import React from "react";
import { mapCalculation } from "./map-calculations";

export const useConverter = (type: any) => {
  const [value, updateValue] = React.useState<number>(0);
  const [assumedValue, updateAssumedValue] = React.useState<number>(0);
  const [result, updateResult] = React.useState<number>();

  const calculate = React.useCallback(() => {
    updateResult(mapCalculation[type]({
      value,
      assumedValue,
    }).toFixed(2));
  }, [value, assumedValue]);

  return {
    value,
    updateValue,
    updateAssumedValue,
    result,
    calculate,
  }
}
