import { Button } from "@mui/material";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import NavbarEmployer from "../../components/common/NavbarEmployer";
import { db } from "../../serverless/firebase";
import { useSession } from "next-auth/react";
import Head from "next/head";

function Applications() {
    const router = useRouter();
    const id = router.query.id;
    const { data: session } = useSession();
    const [application] = useDocument(doc(db, `applications/${id}`));
    const accept = async () => {
        await addDoc(collection(db, `notifications`), {
            email: application?.data()?.["email"],
            jobID: application?.data()?.["opening"],
        });
        alert(
            "Employee selected. Now you can chat with the employee in the 'Chats' section."
        );
        await deleteDoc(doc(db, `applications/${id}`));
        router.push("/");
    };
    const reject = async () => {
        await deleteDoc(doc(db, `applications/${id}`));
        router.push("/");
    };
    return (
        <div>
            <Head>
                <title>Application</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <NavbarEmployer />
            <div className="shadow-lg w-[60%] mx-auto p-10">
                <p>{application?.data()?.["name"]}</p>
                <p>{application?.data()?.["skills"]}</p>
                <p>{application?.data()?.["pr"]}</p>

                <div className="flex justify-end">
                    <Button onClick={accept} variant="outlined">
                        Accept
                    </Button>
                    <Button onClick={reject}>Reject</Button>
                </div>
            </div>
        </div>
    );
}

export default Applications;
