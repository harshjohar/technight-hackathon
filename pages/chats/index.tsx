import Head from "next/head";
import React from "react";
import Nav from "../../components/common/NavbarLabor";

function index() {
    return (
        <div>
            <Head>
                <title>Chat</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <Nav />
            <div className="w-screen h-screen flex flex-col justify-around items-center">
                <div className="flex flex-col items-center">
                    <a href="https://fabchat.vercel.app/" className="text-xl">
                        Chat <span className="text-blue-300">here</span> for now
                    </a>
                    <p>
                        This is another platform built by the same organisation
                        in one of their previous projects. In future, it is
                        aimed to embed this chat inside this platform only.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default index;
