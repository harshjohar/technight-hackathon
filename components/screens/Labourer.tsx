import { collection, orderBy, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../serverless/firebase";
import {AiOutlineStar} from 'react-icons/ai';
import { useAppSelector } from "../../redux/hooks";
import { languageSelect, toggle } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
function Labourer() {
    const [jobs] = useCollection(
        query(collection(db, "jobs"), orderBy("timestamp"))
    );
    const router = useRouter();
    const selectedLanguage = useAppSelector(languageSelect);
    const dispatch = useDispatch();
    return (
        <div className="space-y-6 w-[80%] mx-auto p-10">
            <h1 className="text-3xl">Job openings</h1>
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
            {jobs?.docs?.map((job) => {
                return (
                    <div
                        className="relative shadow-md w-full rounded-md p-8 hover:shadow-2xl cursor-pointer bg-blue-100"
                        onClick={() => router.push(`/openings/${job.id}`)}
                    >
                        <AiOutlineStar className="absolute top-10 right-10" size={26} />
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

export default Labourer;
