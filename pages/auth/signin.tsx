import { signIn, getSession, getProviders } from "next-auth/react";
import { SiGoogle } from "react-icons/si";
import Head from "next/head";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../serverless/firebase";

export default function Login({ providers, callbackUrl }: any) {
    return (
        <main className="flex flex-col items-center h-screen space-y-8 justify-center text-black">
            <Head>
                <title>Sign In | TechNight</title>
            </Head>
            <div className="flex flex-col items-center space-y-5">
                <img
                    src="/assets/images/logo.png"
                    alt="Technight"
                    className="w-32 h-32"
                />
                <div className="text-3xl">
                    <p className="inline"> Sign in to </p>
                    <p className="font-bold text-primary inline">TechNight</p>
                </div>
            </div>
            <div className="p-5 flex flex-col space-y-5">
                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-blue-900 font-semibold text-white text-base px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 ring-blue-300 flex flex-row items-center justify-center rounded-lg"
                        onClick={() =>
                            signIn(providers.google.id, { callbackUrl })
                        }
                    >
                        <SiGoogle className="text-white w-5 h-5 mr-2" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </main>
    );
}


export async function getServerSideProps(context: any) {
    try {
        const { req } = context;
        const session = await getSession({ req });
        if (session) {
            const docRef = doc(db, `users/${session.user?.email}`);
            const userType = (await getDoc(docRef)).data()?.type;
            console.log(userType);
            if(userType) {
                return {
                    redirect: {
                        destination: "/",
                        permanent: false,
                    },
                };
            }
            else {
                return {
                    redirect: {
                        destination: '/auth/filldetails',
                        permanent: false,
                    }
                }
            }
        }
    } catch (e) {
        console.error(e);
    }

    const providers = await getProviders();

    return {
        props: { providers, callbackUrl: "http://localhost:3000" },
    };
}