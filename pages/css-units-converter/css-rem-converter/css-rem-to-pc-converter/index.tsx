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
    <PrimaryLayout pageTitle="CSS rem to px converter">
      <UnitConverter title="rem to pc converter" type="remtopc" />
    </PrimaryLayout>
  );
};

export default CSSREMToPC;
