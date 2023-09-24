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

const CSSPTToPX: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS pt to px converter">
      <UnitConverter title="pt to px converter" type="pttopx" />
    </PrimaryLayout>
  );
};

export default CSSPTToPX;
