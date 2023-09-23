import { Props } from "./interfaces";
import * as Styled from "./title.styled";

export const Title = ({ children, ...props }: Props) => {
  return (
    <Styled.Title as={props.variant as any}>
      {children}
    </Styled.Title>
  )
}