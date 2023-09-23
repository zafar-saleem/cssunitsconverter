import { Props } from "./interfaces";
import * as Styled from "./button.styled";

export const Calculate = ({ children, parentAction }: Props) => {
  return (
    <Styled.Button onClick={parentAction}>{children}</Styled.Button>
  )
}