import { Props } from "./interfaces";
import * as Styled from "./separator.styled";

export const Separator = ({ children }: Props) => {
  return (
    <Styled.Separator>{children}</Styled.Separator>
  )
}
