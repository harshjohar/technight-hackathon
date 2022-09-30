import { onAuthStateChanged } from "firebase/auth";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../serverless/firebase";

const Home: NextPage = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    useEffect(() => {
        if (user) {
            router.push("/dashboard");
        }
        else {
          router.push('/auth/signin')
        }
    }, [user]);
    return (
        <div className="">
            <Head>
                <title>We will win!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>
              loading
            </p>
        </div>
    );
};

export default Home;

export async function getServerSideProps() {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return {
                    redirect: {
                        destination: "/dashboard",
                        permanent: false,
                    },
                };
            }
            else {
              return {
                redirect: {
                    destination: "/auth/signin",
                    permanent: false,
                },
            };
            }
        });
        return {
            props: {},
        };
    } catch (e) {
        console.error(e);
    }
}