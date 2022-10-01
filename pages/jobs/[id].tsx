import { collection, query, where } from "firebase/firestore";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import NavbarEmployer from "../../components/common/NavbarEmployer";
import { db } from "../../serverless/firebase";
function Job() {
    const router = useRouter();
    const [applications] = useCollection(
        query(
            collection(db, `applications`),
            where("opening", "==", router.query.id || "a")
        )
    );
    return (
        <div>
            <Head>
                <title>Job</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <NavbarEmployer />
            <div className="space-y-6 w-[60%] mx-auto p-10 ">
                <h1 className="text-3xl">Posted Applications</h1>
                {applications?.docs.length === 0 && (
                    <p>No Applications for now.</p>
                )}
                {applications?.docs?.map((job) => {
                    return (
                        <div
                            className="shadow-md w-full rounded-md p-8 hover:shadow-2xl cursor-pointer bg-blue-100"
                            onClick={() =>
                                router.push(`/applications/${job.id}`)
                            }
                        >
                            <p className="text-3xl">{job.data()["name"]}</p>
                            <p className="text-xl">{job.data()["pr"]}</p>
                            <p className="text-2xl">
                                Skills: {job.data()["skills"]}
                            </p>
                            <p className="text-right text-2xl">
                                {job.data()["mn"]}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Job;
