import { NextComponentType } from "next";

export type PageWithLayout = NextComponentType & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};