import styled from "styled-components";

export const Separator = styled.div`
  min-height: 100%;
  padding: 1rem;
  font-size: ${props => props.theme.tokens.sizes.size200};
  transform: scaleY(-1);

  @media screen and (max-width: ${props => props.theme.breakpoints.m}) {
    min-height: 0;
    display: flex;
    justify-content: center;
    transform: rotate(90deg);
  }
`;
