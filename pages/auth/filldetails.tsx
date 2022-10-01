import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function filldetails() {
    const router = useRouter();
    return (
        <div className="flex flex-col space-y-6">
            <Head>
                <title>Fill Details</title>
                <link rel="icon" href="/assets/favicon/favicon.ico" />
            </Head>
            <Button onClick={() => router.push("/auth/registercontractor")}>
                I M an Employer
            </Button>
            <Button onClick={() => router.push("/auth/registerlabor")}>
                I M a Labourer
            </Button>
            <Button onClick={() => router.push("/auth/trainer")}>
                I M a trainer
            </Button>
        </div>
    );
}

export default filldetails;
