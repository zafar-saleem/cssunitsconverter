import Link from "next/link";
import {Title} from "../../title";
import { Props } from "./interfaces";
import * as Styled from "./main.styled";

export const Main = ({ children }: Props) => {
  return (
    <Styled.Main>
      <Title variant="h1">
        <Link href="/">CSS Units Converter</Link>
      </Title>
      {children}
    </Styled.Main>
  )
}
