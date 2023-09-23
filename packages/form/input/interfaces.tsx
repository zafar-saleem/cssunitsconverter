export interface Props {
  children?: React.ReactNode;
  name?: string;
  label?: string;
  lock?: boolean;
  updateParentState?: (args: any) => void;
  value?: number;
  type?: string;
}