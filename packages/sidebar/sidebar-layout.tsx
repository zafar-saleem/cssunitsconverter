import Link from "next/link";
// import styles from "./SidebarLayout.module.css";

export interface ISidebarLayout {}

export const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav>
      <input placeholder="Search input from sidebar layout..." />
    </nav>
  );
};

