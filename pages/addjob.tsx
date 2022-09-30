import { Button, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { db } from "../serverless/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function addjob() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [place, setPlace] = useState("");
    const [pay, setPay] = useState("");
    const [we, setWe] = useState("");
    const [skillsReq, setSkillsReq] = useState("");
    const [vacancy, setVacancy] = useState("");

    const { data: session } = useSession();
    const router = useRouter();
    const submitForm = async (e: any) => {
        e.preventDefault();
        await addDoc(collection(db, "jobs"), {
            title: title,
            description: description,
            place: place,
            pay: pay,
            we: we,
            skillsReq: skillsReq,
            vacancy: vacancy,
            employer: session?.user?.email,
            timestamp: serverTimestamp()
        });
        router.push("/");
    };
    return (
        <div className="space-y-6">
            <h1 className="text-5xl text-center">Add Job</h1>
            <h2 className="text-center text-3xl">
                Add details of the job offered
            </h2>
            <form
                className="flex flex-col space-y-4 w-[80%] mx-auto"
                onSubmit={submitForm}
            >
                <TextField
                    label="Job Title"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Job Description"
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    label="Job Place"
                    variant="outlined"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
                <TextField
                    label="Job Pay"
                    variant="outlined"
                    value={pay}
                    onChange={(e) => setPay(e.target.value)}
                />
                <TextField
                    label="Work Environment"
                    variant="outlined"
                    value={we}
                    onChange={(e) => setWe(e.target.value)}
                />
                <TextField
                    label="Skills Required"
                    variant="outlined"
                    value={skillsReq}
                    onChange={(e) => setSkillsReq(e.target.value)}
                />
                <TextField
                    label="Vacancy"
                    variant="outlined"
                    value={vacancy}
                    onChange={(e) => setVacancy(e.target.value)}
                />
                <Button
                    variant="outlined"
                    endIcon={<AiOutlineSend />}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default addjob;
