import * as Styled from "./grid.styled";
import { Props } from "./interfaces";

export const Grid = ({ children, ...props }: Props) => (
  <Styled.Grid {...props}>{children}</Styled.Grid>
);
