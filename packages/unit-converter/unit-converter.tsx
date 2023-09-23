import Middle from "@utils/middle";
import {Title} from "@utils/title";
import React from "react";
import { Props } from "./interface";
import { map } from "./map";
import Link from "next/link";
import { useRouter } from "next/router";

const converters = [
  "/css-units-converter/css-px-converter/css-px-to-rem-converter",
  "/css-units-converter/css-px-converter/css-px-to-em-converter",
  "/css-units-converter/css-px-converter/css-px-to-pc-converter",
  "/css-units-converter/css-px-converter/css-px-to-pt-converter",
  "/css-units-converter/css-px-converter/css-px-to-vw-converter",
  "/css-units-converter/css-px-converter/css-px-to-vh-converter",
];

export const UnitConverter = ({ type, ...props }: Props) => {
  // const [randomLink, updateRandomLink] = React.useState('');
  // const router = useRouter();

  // React.useEffect(() => {
  //   const randomPath = retrieveRandomPath();
    
  //   if (router.pathname !== retrieveRandomPath()) {
  //     updateRandomLink(randomPath);
  //     return;
  //   }
  //   retrieveRandomPath();
  // }, []);

  // const retrieveRandomPath = () => {
  //   return converters[Math.floor(Math.random() * converters.length - 1)];
  // }

  return (
    <Middle height="80vh">
      <Title variant="h2">{props?.title}</Title>
      {map[type]({ ...props })}
      {/* <Link href={randomLink}>more css unit converters</Link> */}
    </Middle>
  )
}
