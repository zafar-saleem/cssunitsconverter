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
    <PrimaryLayout pageTitle="CSS pc to pt converter">
      <UnitConverter title="pc to pt converter" type="pctopt" />
    </PrimaryLayout>
  );
};

export default CSSPTToPC;
