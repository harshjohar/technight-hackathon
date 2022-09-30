import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../serverless/firebase';

function dashboard() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  useEffect(() => {
    if(!user) {
      router.push('/')
    }
  }, [user])
  return (
    <div>dashboard</div>
  )
}

export default dashboard

export async function getServerSideProps() {
  try {
      onAuthStateChanged(auth, (user) => {
          if (!user) {
              return {
                  redirect: {
                      destination: "/",
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

