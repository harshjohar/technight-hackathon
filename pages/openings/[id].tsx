import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import NavbarLabor from "../../components/common/NavbarLabor";
import { Button, TextField } from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../serverless/firebase";

function Opening() {
    const [name, setName] = useState("");
    const [mn, setMn] = useState("");
    const [pr, setPr] = useState("");
    const [id, setId] = useState("");
    const [pe, setPe] = useState("");
    const [skills, setSkills] = useState("");
    const { data: session } = useSession();
    const router = useRouter();

    const submitForm = async (e: any) => {
        e.preventDefault();
        console.log(router.query.id);
        await addDoc(collection(db, `applications`), {
            opening: router.query.id,
            email: session?.user?.email || "a",
            name,
            mn,
            pr,
            id,
            pe,
            skills,
        });
        alert(`Applied for job with ID: ${router.query.id}`)
        router.push('/');
    };
    return (
        <div>
            <NavbarLabor />
            <div className="space-y-5 p-6">
                <h1 className="text-5xl text-center">Apply</h1>
                <h2 className="text-center text-3xl">Job opening</h2>
                <form
                    className="flex flex-col space-y-4 w-[80%] mx-auto"
                    onSubmit={submitForm}
                >
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Mobile Number"
                        variant="outlined"
                        value={mn}
                        onChange={(e) => setMn(e.target.value)}
                    />
                    <TextField
                        label="Place of Residence"
                        variant="outlined"
                        value={pr}
                        onChange={(e) => setPr(e.target.value)}
                    />
                    <TextField
                        label="ID card"
                        variant="outlined"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        label="Previous Experience"
                        variant="outlined"
                        value={pe}
                        onChange={(e) => setPe(e.target.value)}
                    />
                    <TextField
                        label="Skills"
                        variant="outlined"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
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
        </div>
    );
}

export default Opening;
