import styled from "styled-components";

export const Title = styled.h1`
  position: fixed;
  background-color: #4e4c52;
  text-align: center;
  width: 100vw;
  margin: 0;
  padding: 1rem;
  box-shadow: 0 0 5px 0 #333333;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    text-align: center;
  }
`;
