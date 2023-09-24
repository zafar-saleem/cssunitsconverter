import type { NextPage } from "next";
import React from "react";
import { PrimaryLayout } from "@/primary-layout";
import Grid from "@utils/grid";
import Button from "@/button";

const meta = {
  "parent": {
    "name": "CSS units converter",
    "contents": "CSS unit converter helps you convert CSS units such as px, pt, pc, vw, vh with each other conveniently",
  },
  "twitter": [
    {
      "property": "og:title",
      "content": "CSS units converter",
    },
    {
      "property": "og:description",
      "content": "CSS unit converter helps you convert CSS units such as px, pt, pc, vw, vh with each other conveniently",
    },
    {
      "property": "og:url",
      "content": "https://cssunitsconverter.com",
    },
    {
      "property": "og:type",
      "content": "website",
    },
  ]
};

const Items = [
  {
    label: "px to all other units",
    path: "/css-units-converter/css-px-converter",
  },
  {
    label: "rem to all other units",
    path: "/css-units-converter/css-rem-converter",
  },
  {
    label: "em to all other units",
    path: "/css-units-converter/css-em-converter",
  },
  {
    label: "pt to all other units",
    path: "/css-units-converter/css-pt-converter",
  },
  {
    label: "pc to all other units",
    path: "/css-units-converter/css-pc-converter",
  },
  {
    label: "vw to all other units",
    path: "/css-units-converter/css-vw-converter",
  },
  {
    label: "vh to all other units",
    path: "/css-units-converter/css-vh-converter",
  },
];

const Home: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS Units Converter" meta={meta}>
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

export default Home;
