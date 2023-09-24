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

const CSSPTToEM: NextPage = () => {
  return (
    <PrimaryLayout pageTitle="CSS vh to em converter">
      <UnitConverter title="vh to em converter" type="vhtoem" />
    </PrimaryLayout>
  );
};

export default CSSPTToEM;
