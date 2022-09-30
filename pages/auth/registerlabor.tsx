import { Button, TextField } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineSend } from "react-icons/ai";
import { auth, db } from "../../serverless/firebase";

function registerlabor() {
    const [user] = useAuthState(auth);
    const router = useRouter();
    useEffect(() => {
        if (!user) {
            router.push("/auth/signin");
        }
    }, [user]);
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [skills, setSkills] = useState("");
    const [preferredLang, setPreferredLang] = useState("");
    const [education, setEducation] = useState("");

    const submitForm = async (e: any) => {
        e.preventDefault();
        await addDoc(collection(db, "laborors"), {
            email: user?.email,
            name: name,
            place: place,
            skills: skills,
            preferredLang: preferredLang,
            education: education,
            openForWork: false
        });
        router.push('/dashboard');
    };

    return (
        <div className="w-screen h-screen space-y-6">
            <h1 className="text-5xl text-center">Enter your details</h1>
            <h2 className="text-center text-3xl">Labor registration form</h2>
            <Button onClick={() => signOut(auth)}>Signout</Button>
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
                    label="Place"
                    variant="outlined"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    label="Skills"
                    variant="outlined"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
                <TextField
                    label="Preferred Language"
                    variant="outlined"
                    value={preferredLang}
                    onChange={(e) => setPreferredLang(e.target.value)}
                />
                <TextField
                    label="Education"
                    variant="outlined"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
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

export default registerlabor;

export async function getServerSideProps() {
    try {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                return {
                    redirect: {
                        destination: "/auth/signin",
                        permanent: false,
                    },
                };
            }
            else {
                const userDoc = await getDoc(doc(db, `laborors/${user.uid}`));
                console.log(userDoc);
            }
        });
        console.log("first");
        return {
            props: {},
        };
    } catch (e) {
        console.error(e);
    }
}
