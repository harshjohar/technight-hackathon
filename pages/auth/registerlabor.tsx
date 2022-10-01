import { Button, TextField } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { db } from "../../serverless/firebase";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAppSelector } from "../../redux/hooks";
import { languageSelect, toggle } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
import { en, hi } from "../../config/config";

function registerlabor() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [place, setPlace] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [skills, setSkills] = useState("");
    const [preferredLang, setPreferredLang] = useState("");
    const [education, setEducation] = useState("");

    const { data: session } = useSession();

    const submitForm = async (e: any) => {
        e.preventDefault();
        await setDoc(doc(db, `users/${session?.user?.email}`), {
            email: session?.user?.email,
            type: "laboror",
            name: name,
            place: place,
            skills: skills,
            preferredLang: preferredLang,
            education: education,
            openForWork: false,
        });
        router.push("/");
    };
    const signout = () => {
        signOut();
        router.push("/");
    };
    const selectedLanguage = useAppSelector(languageSelect);
    const dispatch = useDispatch();
    return (
        <div className="w-screen h-screen space-y-6">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
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
            <h1 className="text-5xl text-center">{selectedLanguage == 'en'? en.labRegPage.title: hi.labRegPage.title}</h1>
            <h2 className="text-center text-3xl">{selectedLanguage == 'en'? en.labRegPage.subTitle: hi.labRegPage.subTitle}</h2>
            <form
                className="flex flex-col space-y-4 w-[80%] mx-auto"
                onSubmit={submitForm}
            >
                <TextField
                    required={true}
                    label={selectedLanguage == 'en'? en.labRegPage.nameField: hi.labRegPage.nameField}
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required={true}
                    label={selectedLanguage == 'en'? en.labRegPage.cityField: hi.labRegPage.cityField}
                    variant="outlined"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
                <TextField
                    required={true}
                    label={selectedLanguage == 'en'? en.labRegPage.phoneField: hi.labRegPage.phoneField}
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    required={true}
                    label={selectedLanguage == 'en'? en.labRegPage.skillsField: hi.labRegPage.skillsField}
                    variant="outlined"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
                <TextField
                    required={true}
                    label={selectedLanguage == 'en'? en.labRegPage.langField: hi.labRegPage.langField}
                    variant="outlined"
                    value={preferredLang}
                    onChange={(e) => setPreferredLang(e.target.value)}
                />
                <TextField
                    required={true}
                    label={selectedLanguage == 'en'? en.labRegPage.eduField: hi.labRegPage.eduField}
                    variant="outlined"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                />
                <Button
                    variant="outlined"
                    endIcon={<AiOutlineSend />}
                    type="submit"
                >
                    {selectedLanguage == 'en'? en.labRegPage.button: hi.labRegPage.button}
                </Button>
            </form>
        </div>
    );
}

export default registerlabor;
