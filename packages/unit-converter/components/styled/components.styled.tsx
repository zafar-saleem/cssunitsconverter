import styled from "styled-components";

export const Label = styled.span`
  display: flex;
  font-size: 0.8rem;
  width: 150px;
  vertical-align: middle;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    margin: 1rem 0;
  }
`;
