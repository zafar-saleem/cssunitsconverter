import styled from "styled-components";
import { Props } from "./interfaces";

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${props => props.columns ? `repeat(${props.columns}, 1fr)` : `1fr 1fr 1fr`};
  grid-gap: 1rem;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: 1fr;
  }
`;
