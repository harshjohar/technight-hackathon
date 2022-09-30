import React from "react";
import { signIn } from "next-auth/react";

function Landing() {
    return (
        <div>
            Landing
            <button onClick={() => signIn()}>SignIn PLS</button>
        </div>
    );
}

export default Landing;
