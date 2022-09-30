import React from "react";
import { signOut } from "next-auth/react";

function Dashboard() {
    return (
        <div>
            Dashboard
            <button onClick={() => signOut()}>SignOUT MF</button>
        </div>
    );
}

export default Dashboard;
