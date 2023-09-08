import "@/styles/globals.css";
import { PageWithLayout } from "@/types/components/PageWithLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const layout =
    (Component as PageWithLayout).getLayout ||
    ((page: React.ReactNode) => page);
  return layout(<Component {...pageProps} />);
}
