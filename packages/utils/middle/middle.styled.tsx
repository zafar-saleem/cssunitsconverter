import styled from "styled-components";
import { Props } from "./interfaces";

export const Middle = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height || `100vh`};
`;
