import type { NextPage } from "next";
import React from "react";
import { PrimaryLayout } from "@/primary-layout";
import { UnitConverter } from "@/unit-converter";

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

const CSSPTToPC: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS vh to pc converter">
      <UnitConverter title="vh to pc converter" type="vhtopc" />
    </PrimaryLayout>
  );
};

export default CSSPTToPC;
