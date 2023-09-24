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
    <PrimaryLayout pageTitle="CSS pt to pc converter">
      <UnitConverter title="pt to pc converter" type="pttopc" />
    </PrimaryLayout>
  );
};

export default CSSPTToPC;
