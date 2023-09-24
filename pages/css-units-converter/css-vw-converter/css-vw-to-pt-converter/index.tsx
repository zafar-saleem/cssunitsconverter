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
    <PrimaryLayout pageTitle="CSS vw to pt converter">
      <UnitConverter title="vw to pt converter" type="vwtopt" />
    </PrimaryLayout>
  );
};

export default CSSPXToVW;
