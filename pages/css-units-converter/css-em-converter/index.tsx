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
    label: "em to px",
    path: "/css-units-converter/css-em-converter/css-em-to-px-converter",
  },
  {
    label: "em to rem",
    path: "/css-units-converter/css-em-converter/css-em-to-rem-converter",
  },
  {
    label: "em to vw",
    path: "/css-units-converter/css-em-converter/css-em-to-vw-converter",
  },
  {
    label: "em to vh",
    path: "/css-units-converter/css-em-converter/css-em-to-vh-converter",
  },
  {
    label: "em to pt",
    path: "/css-units-converter/css-em-converter/css-em-to-pt-converter",
  },
  {
    label: "em to pc",
    path: "/css-units-converter/css-em-converter/css-em-to-pc-converter",
  },
];

const CSSEMConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS em Converter">
      <Center>
        <h2>CSS em converter</h2>
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

export default CSSEMConverter;
