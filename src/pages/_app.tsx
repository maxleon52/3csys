import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import GlobalStyles from "@styles/GlobalStyles";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
