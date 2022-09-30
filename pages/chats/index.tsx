import Head from "next/head";
import React from "react";

function index() {
    return (
        <div>
            <Head>
                <title>Chat</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <a href="https://fabchat.vercel.app/">Chat here for now</a>
        </div>
    );
}

export default index;
