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
    label: "rem to px",
    path: "/css-units-converter/css-rem-converter/css-rem-to-px-converter",
  },
  {
    label: "rem to em",
    path: "/css-units-converter/css-rem-converter/css-rem-to-em-converter",
  },
  {
    label: "rem to vw",
    path: "/css-units-converter/css-rem-converter/css-rem-to-vw-converter",
  },
  {
    label: "rem to vh",
    path: "/css-units-converter/css-rem-converter/css-rem-to-vh-converter",
  },
  {
    label: "rem to pt",
    path: "/css-units-converter/css-rem-converter/css-rem-to-pt-converter",
  },
  {
    label: "rem to pc",
    path: "/css-units-converter/css-rem-converter/css-rem-to-pc-converter",
  },
];

const CSSREMConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS rem Converter">
      <Title variant="h2">CSS rem converter</Title>
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

export default CSSREMConverter;
