import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;
  border: 1px solid ${props => props.theme.tokens.colors.branding.brand400};
  background-color: ${props => props.theme.tokens.colors.branding.brand400};
  padding: ${props => props.theme.tokens.sizes.size100};
  transition: all 0.3s;

  &:hover {
    color: ${props => props.theme.tokens.colors.branding.brand300};
    background-color: ${props => props.theme.tokens.colors.branding.brand600};
  }
`;
