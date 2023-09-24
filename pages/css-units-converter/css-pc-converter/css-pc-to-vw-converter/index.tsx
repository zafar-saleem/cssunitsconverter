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

const CSSPXToVW: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS pc to vw converter">
      <UnitConverter title="pc to vw converter" type="pctovw" />
    </PrimaryLayout>
  );
};

export default CSSPXToVW;
