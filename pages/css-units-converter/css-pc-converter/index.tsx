import type { NextPage } from "next";
import React from "react";
import { PrimaryLayout } from "@/primary-layout";
import Grid from "@utils/grid";
import Button from "@/button";
import { Title } from "@utils/title";

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
    label: "pc to rem",
    path: "/css-units-converter/css-pc-converter/css-pc-to-rem-converter",
  },
  {
    label: "pc to em",
    path: "/css-units-converter/css-pc-converter/css-pc-to-em-converter",
  },
  {
    label: "pc to vw",
    path: "/css-units-converter/css-pc-converter/css-pc-to-vw-converter",
  },
  {
    label: "pc to vh",
    path: "/css-units-converter/css-pc-converter/css-pc-to-vh-converter",
  },
  {
    label: "pc to px",
    path: "/css-units-converter/css-pc-converter/css-pc-to-px-converter",
  },
  {
    label: "pc to pt",
    path: "/css-units-converter/css-pc-converter/css-pc-to-pt-converter",
  },
];

const CSSPXConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS pc Converter">
      <Title variant="h2">CSS pc converter</Title>
      <Grid>
        {
          Items.map((item: any, index: number) => (
            <Button key={index} href={item.path}>{item.label}</Button>
          ))
        }
      </Grid>
    </PrimaryLayout>
  );
};

export default CSSPXConverter;
