import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
  }: any) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
