import { IProps } from "../interfaces";

export const pxtorem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 16;
}

export const pxtoem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 16;
}

export const pxtovw = ({ value, assumedValue }: IProps): number | undefined => {
  if (!value || !assumedValue) return;
  return (value / assumedValue) * 100;
}

export const pxtovh = ({ value, assumedValue }: IProps): number | undefined => {
  if (!value || !assumedValue) return;
  return (value / assumedValue) * 100;
}

export const pxtopt = ({ value, assumedValue }: IProps): number | undefined => {
  // if (!value || !assumedValue) return;
  return (value) * (72 / 96);
}

export const pxtopc = ({ value, assumedValue }: IProps): number | undefined => {
  // if (!value || !assumedValue) return;
  return value * 0.0625;
}

export const remtopx = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 16;
}

export const remtoem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value;
}

export const remtopc = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 0.4167;
}

export const remtopt = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 12;
}

export const remtovh = ({ value, assumedValue = 0 }: IProps): number | undefined => {
  if (!value && !assumedValue) return;
  return ((value * 16) / assumedValue) * 100;
}

export const remtovw = ({ value, assumedValue = 0 }: IProps): number | undefined => {
  if (!value && !assumedValue) return;
  return ((value * 16) / assumedValue) * 100;
}

// em converting methods
export const emtopx = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 16;
}

export const emtorem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value;
}

export const emtovw = ({ value, assumedValue = 0 }: IProps): number | undefined => {
  if (!value && !assumedValue) return;
  return ((value * 16) / assumedValue) * 100;
}

export const emtovh = ({ value, assumedValue = 0 }: IProps): number | undefined => {
  if (!value && !assumedValue) return;
  return ((value * 16) / assumedValue) * 100;
}

export const emtopt = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 12;
}

export const emtopc = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 0.4167;
}

// pt conveters
export const pttorem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 16;
}

export const pttoem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 16;
}

export const pttovh = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return ((12 * 1.33) / value) * 100;
}

export const pttovw = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return ((12 * 1.33) / value) * 100;
}

export const pttopx = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 4/3;
}

export const pttopc = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 12;
}

// pc converters
export const pctorem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 6;
}

export const pctoem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 6;
}

export const pctovw = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 1;
}

export const pctovh = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 1;
}

export const pctopx = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 16;
}

export const pctopt = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value * 12;
}

// vw conversions
export const vwtorem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 16) / 100;
}

export const vwtoem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 16;
}

export const vwtovh = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 100) / 100;
}

export const vwtopc = ({ value, assumedValue = 0 }: IProps): number | undefined => {
  if (!value && !assumedValue) return;
  return (value * assumedValue) / 100;
}

export const vwtopx = ({ value, assumedValue = 0 }: IProps): number | undefined => {
  if (!value && !assumedValue) return;
  return (value * assumedValue) / 100;
}

export const vwtopt = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 16) / (100 * 12);
}
// vh converter
export const vhtorem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  const val = 16 / 100;
  return value / val;
}

export const vhtoem = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return value / 16;
}

export const vhtovw = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 16) / (100 * 12);
}

export const vhtopx = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 16) / (100 * 12);
}

export const vhtopc = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 16) / (100 * 12);
}

export const vhtopt = ({ value }: IProps): number | undefined => {
  if (!value) return;
  return (value * 16) / (100 * 12);
}

// em converting methods
// export const emtopx = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue * 16;
// }

// export const emtorem = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue;
// }

// export const emtovw = ({ pxValue, pxTotalValue = 0 }: IProps): number | undefined => {
//   if (!pxValue && !pxTotalValue) return;
//   return ((pxValue * 16) / pxTotalValue) * 100;
// }

// export const emtovh = ({ pxValue, pxTotalValue = 0 }: IProps): number | undefined => {
//   if (!pxValue && !pxTotalValue) return;
//   return ((pxValue * 16) / pxTotalValue) * 100;
// }

// export const emtopt = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue * 12;
// }

// export const emtopc = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue * 0.4167;
// }

// // pt conveters
// export const pttorem = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue / 16;
// }

// export const pttoem = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue / 16;
// }

// export const pttovh = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return ((12 * 1.33) / pxValue) * 100;
// }

// export const pttovw = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return ((12 * 1.33) / pxValue) * 100;
// }

// export const pttopx = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue * 4/3;
// }

// export const pttopc = ({ pxValue }: IProps): number | undefined => {
//   if (!pxValue) return;
//   return pxValue / 12;
// }
