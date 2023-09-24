import { PxToVW } from "./components/px/tovw";
import { PxToREM } from "./components/px/torem";
import { PxToEM } from "./components/px/toem";
import { PxToVH } from "./components/px/tovh";
import { PxToPT } from "./components/px/topt";
import { PxToPC } from "./components/px/topc";

import { RemToEm } from "./components/rem/remtoem";
import { RemToPC } from "./components/rem/remtopc";
import { RemToPT } from "./components/rem/remtopt";
import { RemToPX } from "./components/rem/remtopx";
import { RemToVH } from "./components/rem/remtovh";
import { RemToVW } from "./components/rem/remtovw";

import { EMToPX } from "./components/em/emtopx";
import { EMToPC } from "./components/em/emtopc";
import { EMToVH } from "./components/em/emtovh";
import { EMToVW } from "./components/em/emtovw";
import { EMToREM } from "./components/em/emtorem";
import { EMToPT } from "./components/em/emtopt";

import { PTToREM } from "./components/pt/pttorem";
import { PTToEM } from "./components/pt/pttoem";
import { PTToVW } from "./components/pt/pttovw";
import { PTToVH } from "./components/pt/pttovh";
import { PTToPX } from "./components/pt/pttopx";
import { PTToPC } from "./components/pt/pttopc";

import { PCToREM } from "./components/pc/pctorem";
import { PCToEM } from "./components/pc/pctoem";
import { PCToVW } from "./components/pc/pctovw";
import { PCToVH } from "./components/pc/pctovh";
import { PCToPX } from "./components/pc/pctopx";
import { PCToPT } from "./components/pc/pctopt";

import { VWToREM } from "./components/vw/vwtorem";
import { VWToEM } from "./components/vw/vwtoem";
import { VWToPC } from "./components/vw/vwtopc";
import { VWToVH } from "./components/vw/vwtovh";
import { VWToPX } from "./components/vw/vwtopx";
import { VWToPT } from "./components/vw/vwtopt";

import { VHToREM } from "./components/vh/vhtorem";
import { VHToEM } from "./components/vh/vhtoem";
import { VHToPC } from "./components/vh/vhtopc";
import { VHToVW } from "./components/vh/vhtovw";
import { VHToPX } from "./components/vh/vhtopx";
import { VHToPT } from "./components/vh/vhtopt";

export const map: any = {
  tovw: ({ ...props }) => <PxToVW {...props} />,
  torem: ({ ...props }) => <PxToREM {...props} />,
  toem: ({ ...props }) => <PxToEM {...props} />,
  tovh: ({ ...props }) => <PxToVH {...props} />,
  topt: ({ ...props }) => <PxToPT {...props} />,
  topc: ({ ...props }) => <PxToPC {...props} />,

  remtoem: ({ ...props }) => <RemToEm {...props} />,
  remtopc: ({ ...props }) => <RemToPC {...props} />,
  remtopt: ({ ...props }) => <RemToPT {...props} />,
  remtopx: ({ ...props }) => <RemToPX {...props} />,
  remtovh: ({ ...props }) => <RemToVH {...props} />,
  remtovw: ({ ...props }) => <RemToVW {...props} />,

  emtopx: ({ ...props }) => <EMToPX {...props} />,
  emtorem: ({ ...props }) => <EMToREM {...props} />,
  emtopc: ({ ...props }) => <EMToPC {...props} />,
  emtopt: ({ ...props }) => <EMToPT {...props} />,
  emtovh: ({ ...props }) => <EMToVH {...props} />,
  emtovw: ({ ...props }) => <EMToVW {...props} />,

  pttorem: ({ ...props }) => <PTToREM {...props} />,
  pttoem: ({ ...props }) => <PTToEM {...props} />,
  pttovw: ({ ...props }) => <PTToVW {...props} />,
  pttovh: ({ ...props }) => <PTToVH {...props} />,
  pttopx: ({ ...props }) => <PTToPX {...props} />,
  pttopc: ({ ...props }) => <PTToPC {...props} />,

  pctorem: ({ ...props }) => <PCToREM {...props} />,
  pctoem: ({ ...props }) => <PCToEM {...props} />,
  pctovw: ({ ...props }) => <PCToVW {...props} />,
  pctovh: ({ ...props }) => <PCToVH {...props} />,
  pctopx: ({ ...props }) => <PCToPX {...props} />,
  pctopt: ({ ...props }) => <PCToPT {...props} />,

  vwtorem: ({ ...props }) => <VWToREM {...props} />,
  vwtoem: ({ ...props }) => <VWToEM {...props} />,
  vwtopc: ({ ...props }) => <VWToPC {...props} />,
  vwtovh: ({ ...props }) => <VWToVH {...props} />,
  vwtopx: ({ ...props }) => <VWToPX {...props} />,
  vwtopt: ({ ...props }) => <VWToPT {...props} />,

  vhtorem: ({ ...props }) => <VHToREM {...props} />,
  vhtoem: ({ ...props }) => <VHToEM {...props} />,
  vhtopc: ({ ...props }) => <VHToPC {...props} />,
  vhtovw: ({ ...props }) => <VHToVW {...props} />,
  vhtopx: ({ ...props }) => <VHToPX {...props} />,
  vhtopt: ({ ...props }) => <VHToPT {...props} />,
};
