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

const CSSREMToPC: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS em to px converter">
      <UnitConverter title="em to pc converter" type="emtopc" />
    </PrimaryLayout>
  );
};

export default CSSREMToPC;
