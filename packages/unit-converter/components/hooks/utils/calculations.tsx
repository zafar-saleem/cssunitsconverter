import { IProps } from "../interfaces";

export const pxtorem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 16;
}

export const pxtoem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 16;
}

export const pxtovw = ({ pxValue, pxTotalValue }: IProps): number | undefined => {
  if (!pxValue || !pxTotalValue) return;
  return (pxValue / pxTotalValue) * 100;
}

export const pxtovh = ({ pxValue, pxTotalValue }: IProps): number | undefined => {
  if (!pxValue || !pxTotalValue) return;
  return (pxValue / pxTotalValue) * 100;
}

export const pxtopt = ({ pxValue, pxTotalValue }: IProps): number | undefined => {
  if (!pxValue || !pxTotalValue) return;
  return (pxValue) * (72 / 96);
}

export const pxtopc = ({ pxValue, pxTotalValue }: IProps): number | undefined => {
  if (!pxValue || !pxTotalValue) return;
  return pxValue * 0.0625;
}

export const remtopx = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 16;
}

export const remtoem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue;
}

export const remtopc = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 0.4167;
}

export const remtopt = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 12;
}

export const remtovh = ({ pxValue, pxTotalValue = 0 }: IProps): number | undefined => {
  if (!pxValue && !pxTotalValue) return;
  return ((pxValue * 16) / pxTotalValue) * 100;
}

export const remtovw = ({ pxValue, pxTotalValue = 0 }: IProps): number | undefined => {
  if (!pxValue && !pxTotalValue) return;
  return ((pxValue * 16) / pxTotalValue) * 100;
}

// em converting methods
export const emtopx = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 16;
}

export const emtorem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue;
}

export const emtovw = ({ pxValue, pxTotalValue = 0 }: IProps): number | undefined => {
  if (!pxValue && !pxTotalValue) return;
  return ((pxValue * 16) / pxTotalValue) * 100;
}

export const emtovh = ({ pxValue, pxTotalValue = 0 }: IProps): number | undefined => {
  if (!pxValue && !pxTotalValue) return;
  return ((pxValue * 16) / pxTotalValue) * 100;
}

export const emtopt = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 12;
}

export const emtopc = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 0.4167;
}

// pt conveters
export const pttorem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 16;
}

export const pttoem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 16;
}

export const pttovh = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return ((12 * 1.33) / pxValue) * 100;
}

export const pttovw = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return ((12 * 1.33) / pxValue) * 100;
}

export const pttopx = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 4/3;
}

export const pttopc = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 12;
}

// pc converters
export const pctorem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 6;
}

export const pctoem = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue / 6;
}

export const pctovw = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 1;
}

export const pctovh = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 1;
}

export const pctopx = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 16;
}

export const pctopt = ({ pxValue }: IProps): number | undefined => {
  if (!pxValue) return;
  return pxValue * 12;
}
