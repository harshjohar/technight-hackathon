import { Button, TextField } from "@mui/material";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { auth, db } from "../../serverless/firebase";
import { useSession } from "next-auth/react";
import Head from "next/head";
function registercontractor() {
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [company, setCompany] = useState("");
    const [about, setAbout] = useState("");

    const { data: session } = useSession();
    const router = useRouter();
    const submitForm = async (e: any) => {
        e.preventDefault();
        await setDoc(doc(db, `users/${session?.user?.email}`), {
            email: session?.user?.email,
            type: "employer",
            name: name,
            place: place,
            about,
            company,
        });
        router.push("/");
    };
    return (
        <div className="w-screen h-screen space-y-6">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <h1 className="text-5xl text-center">Enter your details</h1>
            <h2 className="text-center text-3xl">Employer registration form</h2>
            <form
                className="flex flex-col space-y-4 w-[80%] mx-auto"
                onSubmit={submitForm}
            >
                <TextField
                    required={true}
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required={true}
                    label="Place"
                    variant="outlined"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
                <TextField
                    required={true}
                    label="Phone Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    required={true}
                    label="Company"
                    variant="outlined"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <TextField
                    required={true}
                    label="About Company"
                    variant="outlined"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
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

export default registercontractor;
