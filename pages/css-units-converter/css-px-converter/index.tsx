import type { NextPage } from "next";
import React from "react";
import { PrimaryLayout } from "@/primary-layout";
import Grid from "@utils/grid";
import Button from "@/button";

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
    label: "px to rem",
    path: "/css-units-converter/css-px-converter/css-px-to-rem-converter",
  },
  {
    label: "px to em",
    path: "/css-units-converter/css-px-converter/css-px-to-em-converter",
  },
  {
    label: "px to vw",
    path: "/css-units-converter/css-px-converter/css-px-to-vw-converter",
  },
  {
    label: "px to vh",
    path: "/css-units-converter/css-px-converter/css-px-to-vh-converter",
  },
  {
    label: "px to pt",
    path: "/css-units-converter/css-px-converter/css-px-to-pt-converter",
  },
  {
    label: "px to pc",
    path: "/css-units-converter/css-px-converter/css-px-to-pc-converter",
  },
];

const CSSPXConverter: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS Pixel Converter">
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
