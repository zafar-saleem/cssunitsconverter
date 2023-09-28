import styled from "styled-components";
import { Props } from "./interfaces";

export const Input = styled.div`
  position: relative;
  width: 100%;
`;

export const Field = styled.input<Props>`
  width: 100%;
  font-size: 2rem;
  text-align: center;
  outline: none;
  padding: ${props => props.theme.tokens.sizes.size100} ${props => props.theme.tokens.sizes.size300};
  color: ${props => props.lock ? props.theme.tokens.colors.branding.brand400 : props.theme.tokens.colors.font.font100};
  background-color: ${props => props.theme.tokens.colors.branding.brand600};
  border: 1px solid ${props => props.theme.tokens.colors.branding.brand400};
  transition: all 0.3s;

  &:focus {
    box-shadow: 0 0 10px #000000;
  }
`;

export const Label = styled.label`
  // position: absolute;
  right: ${props => props.theme.tokens.gutter.gutter100};
  color: ${props => props.theme.tokens.colors.branding.brand400};
  padding: 26px 0;
  z-index: 1;
  font-size: 0.9rem;
`;
