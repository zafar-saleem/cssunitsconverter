import styled from "styled-components";

export const Title = styled.h1`
  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    text-align: center;
  }
`;
