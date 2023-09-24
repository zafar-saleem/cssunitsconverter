import type { NextPage } from "next";
import React from "react";
import { PrimaryLayout } from "@/primary-layout";
import { UnitConverter } from "@/unit-converter";
import { Title } from "@utils/title";

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
    <PrimaryLayout pageTitle="CSS pc to em converter">
      <UnitConverter title="pc to em converter" type="pctoem" />
    </PrimaryLayout>
  );
};

export default CSSPTToEM;
