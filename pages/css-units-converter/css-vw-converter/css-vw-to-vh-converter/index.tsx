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

const CSSPXToVH: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS vw to vh converter">
      <UnitConverter title="vw to vh converter" type="vwtovh" />
    </PrimaryLayout>
  );
};

export default CSSPXToVH;
