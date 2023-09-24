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
    <PrimaryLayout pageTitle="CSS vh to pt converter">
      <UnitConverter title="vh to pt converter" type="vhtopt" />
    </PrimaryLayout>
  );
};

export default CSSPXToVW;
