import { collection } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import Nav from "../components/common/NavbarLabor";
import { en, hi } from "../config/config";
import { useAppSelector } from "../redux/hooks";
import { languageSelect, toggle } from "../redux/languageSlice";
import { db } from "../serverless/firebase";

function notifications() {
    const [notifs] = useCollection(collection(db, "notifications"));
    const selectedLanguage = useAppSelector(languageSelect);
    const dispatch = useDispatch();
    return (
        <div>
            <Nav />
            <Head>
                <title>Notifications</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            {selectedLanguage == "en" ? (
                    <button
                        className="bottom-5 right-10 absolute"
                        onClick={() => dispatch(toggle())}
                    >
                        भाषा बदलो
                    </button>
                ) : (
                    <button
                        className="bottom-5 right-10 absolute"
                        onClick={() => dispatch(toggle())}
                    >
                        Change Language
                    </button>
            )}
            <div className="w-[80%] mx-auto">
                <h1 className="text-4xl">{selectedLanguage == 'en'? en.labnotifications.lab_notif : hi.labnotifications.lab_notif}</h1>
                {notifs?.docs.map((notif) => {
                    return (
                        <div>
                            <div className="shadow-lg py-10">
                                <p>
                                    {selectedLanguage == 'en'? en.labnotifications.lab_msg1 : hi.labnotifications.lab_msg1} {notif.data()["jobID"]}.
                                    {selectedLanguage == 'en'? en.labnotifications.lab_msg2 : hi.labnotifications.lab_msg2}
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
