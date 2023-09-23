import { Props } from "./interfaces";
import * as Styled from "./flex.styled";

export const Flex = ({ children, ...props }: Props) => {
  return (
    <Styled.Flex {...props}>{children}</Styled.Flex>
  )
}