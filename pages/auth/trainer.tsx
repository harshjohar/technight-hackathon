import { Button, TextField } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { db } from '../../serverless/firebase';

function trainer() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [area, setArea] = useState("");
    const [preferredLang, setPreferredLang] = useState("");

    const { data: session } = useSession();

    const submitForm = async (e: any) => {
        e.preventDefault();
        await setDoc(doc(db, `users/${session?.user?.email}`), {
            email: session?.user?.email,
            type: "trainer",
            name: name,
            place: place,
            area: area,
            preferredLang: preferredLang,
            openForWork: false,
        });
        router.push("/");
    };
    const signout = () => {
        signOut();
        router.push("/");
    };

    return (
        <div className="w-screen h-screen space-y-6">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <h1 className="text-5xl text-center">Enter your details</h1>
            <h2 className="text-center text-3xl">Labor registration form</h2>
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
                    label="Area of Expertise"
                    variant="outlined"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                />
                <TextField
                    required={true}
                    label="Preferred Language"
                    variant="outlined"
                    value={preferredLang}
                    onChange={(e) => setPreferredLang(e.target.value)}
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

export default trainer