import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import NavbarLabor from "../../components/common/NavbarLabor";
import { Button, TextField } from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../serverless/firebase";
import Head from "next/head";
import { useAppSelector } from "../../redux/hooks";
import { languageSelect, toggle } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
import { en, hi } from "../../config/config";

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
        alert(`Applied for job with ID: ${router.query.id}`);
        router.push("/");
    };
    const selectedLanguage = useAppSelector(languageSelect);
    const dispatch = useDispatch();
    return (
        <div>
            <Head>
                <title>
                    Openings
                </title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <NavbarLabor />
            <div className="space-y-5 p-6">
                <h1 className="text-5xl text-center">{selectedLanguage=='en'? en.labapply.lab_title:hi.labapply.lab_title}</h1>
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
                <h2 className="text-center text-3xl">
                    {selectedLanguage=='en'? en.labapply.lab_subtitle: hi.labapply.lab_subtitle}
                </h2>
                <form
                    className="flex flex-col space-y-4 w-[80%] mx-auto"
                    onSubmit={submitForm}
                    >
                    <TextField
                        required={true}
                        label={selectedLanguage=='en'? en.labapply.lab_name:hi.labapply.lab_name}
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    <TextField
                        required={true}
                        label={selectedLanguage=='en'? en.labapply.lab_mno:hi.labapply.lab_mno}
                        variant="outlined"
                        value={mn}
                        onChange={(e) => setMn(e.target.value)}
                    />
                    <TextField
                        required={true}
                        label={selectedLanguage=='en'? en.labapply.lab_resid:hi.labapply.lab_resid}
                        variant="outlined"
                        value={pr}
                        onChange={(e) => setPr(e.target.value)}
                    />
                    <TextField
                        required={true}
                        label={selectedLanguage=='en'? en.labapply.lab_id:hi.labapply.lab_id}
                        variant="outlined"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                    <TextField
                        required={true}
                        label={selectedLanguage == 'en'? en.labapply.lab_exp:hi.labapply.lab_exp}
                        variant="outlined"
                        value={pe}
                        onChange={(e) => setPe(e.target.value)}
                    />
                    <TextField
                        required={true}
                        label={selectedLanguage=='en'? en.labapply.lab_skills:hi.labapply.lab_skills}
                        variant="outlined"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                    <Button
                        variant="outlined"
                        endIcon={<AiOutlineSend />}
                        type="submit"
                    >
                        {selectedLanguage=='en'? en.labapply.lab_submit : hi.labapply.lab_submit}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Opening;
