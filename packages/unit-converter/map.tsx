import * as pxConverters from "./components/px";
import * as remConverters from "./components/rem";
import * as vhConverters from "./components/vh";
import * as vwConverters from "./components/vw";
import * as pcConverters from "./components/pc";
import * as ptConverters from "./components/pt";
import * as emConverters from "./components/em";

export const map: any = {
  tovw: ({ ...props }) => <pxConverters.PxToVW {...props} />,
  torem: ({ ...props }) => <pxConverters.PxToREM {...props} />,
  toem: ({ ...props }) => <pxConverters.PxToEM {...props} />,
  tovh: ({ ...props }) => <pxConverters.PxToVH {...props} />,
  topt: ({ ...props }) => <pxConverters.PxToPT {...props} />,
  topc: ({ ...props }) => <pxConverters.PxToPC {...props} />,

  remtoem: ({ ...props }) => <remConverters.RemToEm {...props} />,
  remtopc: ({ ...props }) => <remConverters.RemToPC {...props} />,
  remtopt: ({ ...props }) => <remConverters.RemToPT {...props} />,
  remtopx: ({ ...props }) => <remConverters.RemToPX {...props} />,
  remtovh: ({ ...props }) => <remConverters.RemToVH {...props} />,
  remtovw: ({ ...props }) => <remConverters.RemToVW {...props} />,

  emtopx: ({ ...props }) => <emConverters.EMToPX {...props} />,
  emtorem: ({ ...props }) => <emConverters.EMToREM {...props} />,
  emtopc: ({ ...props }) => <emConverters.EMToPC {...props} />,
  emtopt: ({ ...props }) => <emConverters.EMToPT {...props} />,
  emtovh: ({ ...props }) => <emConverters.EMToVH {...props} />,
  emtovw: ({ ...props }) => <emConverters.EMToVW {...props} />,

  pttorem: ({ ...props }) => <ptConverters.PTToREM {...props} />,
  pttoem: ({ ...props }) => <ptConverters.PTToEM {...props} />,
  pttovw: ({ ...props }) => <ptConverters.PTToVW {...props} />,
  pttovh: ({ ...props }) => <ptConverters.PTToVH {...props} />,
  pttopx: ({ ...props }) => <ptConverters.PTToPX {...props} />,
  pttopc: ({ ...props }) => <ptConverters.PTToPC {...props} />,

  pctorem: ({ ...props }) => <pcConverters.PCToREM {...props} />,
  pctoem: ({ ...props }) => <pcConverters.PCToEM {...props} />,
  pctovw: ({ ...props }) => <pcConverters.PCToVW {...props} />,
  pctovh: ({ ...props }) => <pcConverters.PCToVH {...props} />,
  pctopx: ({ ...props }) => <pcConverters.PCToPX {...props} />,
  pctopt: ({ ...props }) => <pcConverters.PCToPT {...props} />,

  vwtorem: ({ ...props }) => <vwConverters.VWToREM {...props} />,
  vwtoem: ({ ...props }) => <vwConverters.VWToEM {...props} />,
  vwtopc: ({ ...props }) => <vwConverters.VWToPC {...props} />,
  vwtovh: ({ ...props }) => <vwConverters.VWToVH {...props} />,
  vwtopx: ({ ...props }) => <vwConverters.VWToPX {...props} />,
  vwtopt: ({ ...props }) => <vwConverters.VWToPT {...props} />,

  vhtorem: ({ ...props }) => <vhConverters.VHToREM {...props} />,
  vhtoem: ({ ...props }) => <vhConverters.VHToEM {...props} />,
  vhtopc: ({ ...props }) => <vhConverters.VHToPC {...props} />,
  vhtovw: ({ ...props }) => <vhConverters.VHToVW {...props} />,
  vhtopx: ({ ...props }) => <vhConverters.VHToPX {...props} />,
  vhtopt: ({ ...props }) => <vhConverters.VHToPT {...props} />,
};
