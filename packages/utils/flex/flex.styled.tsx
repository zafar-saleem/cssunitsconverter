import styled from "styled-components";
import { Props } from "./interfaces";

export const Flex = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.direction || "column"};

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`;
