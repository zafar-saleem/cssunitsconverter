import styled from "styled-components";

export const Main = styled.main`
  // max-width: ${props => props.theme.breakpoints.l};
  margin: auto;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    max-width: ${props => props.theme.breakpoints.m};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: ${props => props.theme.breakpoints.s};
  }
`;
