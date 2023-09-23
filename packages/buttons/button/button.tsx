import { ReactNode } from "react";
import * as Styled from "./button.styled";
import { Props } from "./interfaces";

export const Button = ({ children, ...props }: Props) => {
  return (
    <Styled.Button href={props.href}>{children}</Styled.Button>
  )
}
