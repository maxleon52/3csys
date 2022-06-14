import { useEffect, useState } from "react";
import { SessionProvider, useSession, getSession } from "next-auth/react";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import { parseCookies } from "nookies";

import GlobalStyles from "@styles/GlobalStyles";

import Sidebar from "@components/Sidebar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const { ["next-auth.session-token"]: token } = parseCookies();
  const [existSession, setExistSession] = useState<Session | null>(null);

  useEffect(() => {
    // const theCookie = document.cookie.split("; ");
    async function handleSession() {
      const session = await getSession();
      console.log("session aqui, :", session);
      setExistSession(session);
    }
    handleSession();
    // console.log("token aqui, :", theCookie);
  }, []);

  return (
    <SessionProvider session={session}>
      <GlobalStyles />

      <div className="container-app">
        {existSession !== null && <Sidebar />}
        <main className="main-app">
          <Component {...pageProps} />
        </main>
      </div>
    </SessionProvider>
  );
}

export default MyApp;
