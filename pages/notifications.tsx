import { collection } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Nav from "../components/common/NavbarLabor";
import { db } from "../serverless/firebase";

function notifications() {
    const [notifs] = useCollection(collection(db, "notifications"));
    return (
        <div>
            <Nav />
            <Head>
                <title>Notifications</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <div className="w-[60%] mx-auto">
                <h1 className="text-4xl">Notifications</h1>
                {notifs?.docs.map((notif) => {
                    return (
                        <div>
                            <div className="shadow-lg py-10">
                                <p>
                                    You are selected with job ID {notif.data()["jobID"]}.
                                    Congrats! Now you can chat with your
                                    employer.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default notifications;
