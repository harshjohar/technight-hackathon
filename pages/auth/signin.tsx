import { signIn, getSession, getProviders } from "next-auth/react";
import { SiGoogle } from "react-icons/si";
import Head from "next/head";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../serverless/firebase";
import { useAppSelector } from "../../redux/hooks";
import { languageSelect, toggle } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
import { en, hi } from "../../config/config";

export default function Login({ providers, callbackUrl }: any) {
    const selectedLanguage = useAppSelector(languageSelect);
    const dispatch = useDispatch();
    return (
        <main className="flex flex-col items-center h-screen space-y-8 justify-center text-black bg-gray-900">
           {selectedLanguage == "en" ? (
                    <button
                        className="bottom-5 right-10 absolute text-white"
                        onClick={() => dispatch(toggle())}
                    >
                        भाषा बदलो
                    </button>
                ) : (
                    <button
                        className="bottom-5 right-10 absolute text-white"
                        onClick={() => dispatch(toggle())}
                    >
                        Change Language
                    </button>
                )}
            <Head>
                <title>Sign In | TechNight</title>
            </Head>
            <div className="flex flex-col items-center space-y-5">
                <img
                    src="/logo.png"
                    alt="Technight"
                    className="h-32 object-contain"
                />
                <div className="text-3xl text-white">
                    <p className="inline"> {selectedLanguage=='en'?en.googleLogIn.signin:hi.googleLogIn.signin}</p>
                </div>
            </div>
            <div className="p-5 flex flex-col space-y-5">
                <div className="flex flex-col space-y-4">
                    <button
                        className="bg-white text-gray-900 font-semibold  text-base px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 ring-blue-300 flex flex-row items-center justify-center rounded-lg"
                        onClick={() =>
                            signIn(providers.google.id, { callbackUrl })
                        }
                    >
                        <SiGoogle className="text-gray-900 w-5 h-5 mr-2" />
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