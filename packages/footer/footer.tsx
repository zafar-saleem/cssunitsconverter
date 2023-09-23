import {Title} from "@utils/title";
import * as Styled from "./footer.styled";
import Link from "next/link";

export interface IHeader {}

export const Footer: React.FC<IHeader> = () => {
  return (
    <Styled.Footer>
      <section>
        <Title variant="h3">px to all other</Title>
        <div><Link href="/css-px-converter/css-px-to-rem-converter">px to rem</Link></div>
        <div><Link href="/css-px-converter/css-px-to-rem-converter">px to em</Link></div>
        <div><Link href="css-px-converter/css-px-to-rem-converter">px to pt</Link></div>
        <div><Link href="css-px-converter/css-px-to-rem-converter">px to pc</Link></div>
        <div><Link href="css-px-converter/css-px-to-rem-converter">px to vw</Link></div>
        <div><Link href="css-px-converter/css-px-to-rem-converter">px to vh</Link></div>
      </section>
      <section>
        <Title variant="h3">rem to all other</Title>
        <div><Link href="css-rem-converter/css-rem-to-px-converter">rem to px</Link></div>
        <div><Link href="css-rem-converter/css-rem-to-em-converter">rem to em</Link></div>
        <div><Link href="css-rem-converter/css-rem-to-pt-converter">rem to pt</Link></div>
        <div><Link href="css-rem-converter/css-rem-to-pc-converter">rem to pc</Link></div>
        <div><Link href="css-rem-converter/css-rem-to-vw-converter">rem to vw</Link></div>
        <div><Link href="css-rem-converter/css-rem-to-vh-converter">rem to vh</Link></div>
      </section>
    </Styled.Footer>
  );
};

export default Footer;

