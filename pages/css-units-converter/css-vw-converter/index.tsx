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
    label: "vw to rem",
    path: "/css-units-converter/css-vw-converter/css-vw-to-rem-converter",
  },
  {
    label: "vw to em",
    path: "/css-units-converter/css-vw-converter/css-vw-to-em-converter",
  },
  {
    label: "vw to pt",
    path: "/css-units-converter/css-vw-converter/css-vw-to-pt-converter",
  },
  {
    label: "vw to vh",
    path: "/css-units-converter/css-vw-converter/css-vw-to-vh-converter",
  },
  {
    label: "vw to px",
    path: "/css-units-converter/css-vw-converter/css-vw-to-px-converter",
  },
  {
    label: "vw to pc",
    path: "/css-units-converter/css-vw-converter/css-vw-to-pc-converter",
  },
];

const CSSPXConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS vw Converter">
      <Center>
        <h2>CSS vw converter</h2>
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
