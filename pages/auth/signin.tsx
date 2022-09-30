import React, { useEffect } from "react";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../serverless/firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";
import {SiGoogle} from 'react-icons/si';
import Head from "next/head";

function signin() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  useEffect(() => {
    if(user) {
      router.push('/auth/registerlabor')
    }
  }, [user])
    return (
      <main className="flex flex-col items-center h-screen space-y-8 justify-center text-black">
      <Head>
          <title>Sign In | Project</title>
      </Head>
      <div className="flex flex-col items-center space-y-5">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfUk0pNYvNT1f8yTihvxDRh6ou9fn71QLvJVOjbGJqA&s"
              alt="HMM"
              className="w-32 h-32"
          />
          <div className="text-3xl">
              <p className="inline"> Sign in to </p>
              <p className="font-bold text-primary inline">project</p>
          </div>
      </div>
      <div className="p-5 flex flex-col space-y-5">
          <div className="flex flex-col space-y-4">
              <button
                  className="bg-primary font-semibold text-black text-base px-3 py-2 hover:opacity-90 focus:outline-none focus:ring-2 ring-blue-300 flex flex-row items-center justify-center rounded-lg"
                  onClick={() =>
                      signInWithPopup(auth, provider)
                  }
              >
                  <SiGoogle className="text-black w-5 h-5 mr-2" />
                  Sign in with Google
              </button>
          </div>
      </div>
  </main>
    );
}

export default signin;

export async function getServerSideProps() {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                return {
                    redirect: {
                        destination: "/auth/registerlabor",
                        permanent: false,
                    },
                };
            }
        });
        return {
          props: {}
        };
    } catch (e) {
        console.error(e);
    }
}
