import { collection } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Nav from "../components/common/NavbarLabor";
import { db } from "../serverless/firebase";

function notifications() {
    const [notifs] = useCollection(collection(db, "notifications"));
    return (
        <div>
            <Nav />
            <div className="w-[60%] mx-auto">
                <h1 className="text-4xl">Notifications</h1>
                {notifs?.docs.map((notif) => {
                    return (
                        <div>
                            <div className="shadow-lg py-10">
                                <p>
                                    You are selected with job ID {notif.data()["jobID"]}.
                                    Congrats! Now you can chat with the
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
