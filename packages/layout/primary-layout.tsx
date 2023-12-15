import Head from "next/head";
import * as Styled from "./primary-layout.styled";
import Link from "next/link";
import {Title} from "@utils/title";
// import { Footer } from "@/footer";

export interface IMeta {
  "name": string;
  "contents": string;
  "og:title": string;
  "og:description": string;
  "og:url": string;
  "og:type": string;
}

export interface IPrimaryLayout {
  children?: React.ReactNode;
  pageTitle: string;
  meta?: any; //IMeta[];
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({ meta, pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {meta && <meta name={meta.parent.name} content={meta.parent.contents} />}
        {
          meta?.twitter?.map((item: any, index: number) => (
            <meta key={`${index}-${item.name}`} property={item.property} content={item.content} />
          ))
        }
      </Head>
      <header>
        <Title logo>
          <Link href="/">CSS Unit Converters</Link>
        </Title>
      </header>
      <Styled.Main>
        {children}
      </Styled.Main>
      {/* <Footer /> */}
    </>
  );
};

// export default PrimaryLayout;

