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

const CSSPXToEM: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS Pixel to pt converter">
      <UnitConverter title="px to pt converter" type="topt" />
    </PrimaryLayout>
  );
};

export default CSSPXToEM;
