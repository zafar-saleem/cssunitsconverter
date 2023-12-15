import type { NextPage } from "next";
import React from "react";
import { PrimaryLayout } from "@/primary-layout";
import Grid from "@utils/grid";
import Button from "@/button";
import { Title } from "@utils/title";
import { Center } from "../../../packages/utils/center";

// const SEO_CONTENTS = [
//   {
//     "name": "string",
//     "contents": "string",
//     "og:title": "string",
//     "og:description": "string",
//     "og:url": "string",
//     "og:type": "string",
//   }
// ];

const Items = [
  {
    label: "vh to rem",
    path: "/css-units-converter/css-vh-converter/css-vh-to-rem-converter",
  },
  {
    label: "vh to em",
    path: "/css-units-converter/css-vh-converter/css-vh-to-em-converter",
  },
  {
    label: "vh to pt",
    path: "/css-units-converter/css-vh-converter/css-vh-to-pt-converter",
  },
  {
    label: "vh to vw",
    path: "/css-units-converter/css-vh-converter/css-vh-to-vw-converter",
  },
  {
    label: "vh to px",
    path: "/css-units-converter/css-vh-converter/css-vh-to-px-converter",
  },
  {
    label: "vh to pc",
    path: "/css-units-converter/css-vh-converter/css-vh-to-pc-converter",
  },
];

const CSSPXConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS vw Converter">
      <Center>
        <h2>CSS vh converter</h2>
        <Grid>
          {
            Items.map((item: any, index: number) => (
              <Button key={index} href={item.path}>{item.label}</Button>
            ))
          }
        </Grid>
      </Center>
    </PrimaryLayout>
  );
};

export default CSSPXConverter;
