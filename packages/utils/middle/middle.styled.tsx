import styled from "styled-components";
import { Props } from "./interfaces";

export const Middle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => props.theme.breakpoints.l};
  margin: auto;
  height: ${props => props.height || `100vh`};
`;
