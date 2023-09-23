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
};
