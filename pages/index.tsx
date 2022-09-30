import type { NextPage } from "next";
import Head from "next/head";
import { signIn, useSession, getSession } from "next-auth/react";
import Layout from "../components/common/Layout";
import Landing from "../components/screens/Landing";
import Dashboard from "../components/screens/Dashboard";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../serverless/firebase";

const Home: NextPage = ({ loggedIn, userType }: any) => {
    return (
        <div className="">
            <Head>
                <title>We will win!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout title="ExSolution">
                {loggedIn ? <Dashboard type={userType} /> : <Landing />}
            </Layout>
        </div>
    );
};

export default Home;

export async function getServerSideProps(context: any) {
    try {
        const { req } = context;
        const session = await getSession({ req });
        if (session) {
            const docRef = doc(db, `users/${session.user?.email}`);
            const userType = (await getDoc(docRef)).data()?.type;
            if (!userType) {
                return {
                    redirect: {
                        destination: "/auth/filldetails",
                        permanent: false,
                    },
                };
            }
            return {
                props: {
                    loggedIn: true,
                    userType,
                },
            };
        }
    } catch (e) {
        console.error(e);
    }

    return {
        props: {
            loggedIn: false,
        },
    };
}
