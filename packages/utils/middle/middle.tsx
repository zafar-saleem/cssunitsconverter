import { Props } from "./interfaces";
import * as Styled from "./middle.styled";

export const Middle = ({ children, ...props }: Props) => {
  return (
    <Styled.Middle {...props}>{children}</Styled.Middle>
  )
}
