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
