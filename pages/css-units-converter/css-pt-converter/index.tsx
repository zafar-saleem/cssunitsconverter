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
    label: "pt to rem",
    path: "/css-units-converter/css-pt-converter/css-pt-to-rem-converter",
  },
  {
    label: "pt to em",
    path: "/css-units-converter/css-pt-converter/css-pt-to-em-converter",
  },
  {
    label: "pt to vw",
    path: "/css-units-converter/css-pt-converter/css-pt-to-vw-converter",
  },
  {
    label: "pt to vh",
    path: "/css-units-converter/css-pt-converter/css-pt-to-vh-converter",
  },
  {
    label: "pt to px",
    path: "/css-units-converter/css-pt-converter/css-pt-to-px-converter",
  },
  {
    label: "pt to pc",
    path: "/css-units-converter/css-pt-converter/css-pt-to-pc-converter",
  },
];

const CSSPXConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS Pixel Converter">
      <Center>
        <h2>CSS pt converter</h2>
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
