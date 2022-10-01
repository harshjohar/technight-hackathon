import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type layout = {
    title?: string;
    children: ReactNode;
};
function Layout({ title, children }: layout) {
    return (
        <div className="h-screen w-screen">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            {children}
        </div>
    );
}


export default Layout;
