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
    <PrimaryLayout pageTitle="CSS em to vw converter">
      <UnitConverter title="em to vw converter" type="emtovw" />
    </PrimaryLayout>
  );
};

export default CSSPXToEM;
