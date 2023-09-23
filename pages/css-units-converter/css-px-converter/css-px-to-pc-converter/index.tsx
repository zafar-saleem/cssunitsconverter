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

const CSSPXToPC: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS Pixel to pc converter">
      <UnitConverter title="px to pc converter" type="topc" />
    </PrimaryLayout>
  );
};

export default CSSPXToPC;
