import { collection, query, where } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useSession } from "next-auth/react";
import { db } from "../../serverless/firebase";
import { useRouter } from "next/router";

function Employer() {
    const { data: session } = useSession();
    const [jobs] = useCollection(
        query(
            collection(db, "jobs"),
            where(
                "employer",
                "==",
                session?.user?.email ? session?.user?.email : "a"
            )
        )
    );
    const router = useRouter();
    return (
        <div className="space-y-6 w-[60%] mx-auto p-10 ">
            <h1 className="text-3xl">Posted Jobs</h1>
            {jobs?.docs?.map((job) => {
                return (
                    <div
                        className="shadow-md w-full rounded-md p-8 hover:shadow-2xl cursor-pointer bg-blue-100"
                        onClick={() => router.push(`/jobs/${job.id}`)}
                    >
                        <p className="text-3xl">{job.data()["title"]}</p>
                        <p className="text-xl">{job.data()["description"]}</p>
                        <p className="text-2xl">
                            Location: {job.data()["place"]}
                        </p>
                        <p className="text-right text-2xl">
                            {job.data()["pay"]}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Employer;
