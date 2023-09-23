import Link from "next/link";
import styled from "styled-components";
import { Props } from "./interfaces";

export const Button = styled(Link)<Props>`
  display: block;
  border: 0px solid ${props => props.theme.tokens.colors.branding.brand500};
  background-color: ${props => props.theme.tokens.colors.branding.brand500};
  color: ${props => props.theme.tokens.colors.font.font200};
  padding: 5rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px ${props => props.theme.tokens.colors.branding.brand700};
  transition: all 0.3s;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 0px #000000;
    }
  }
`;
