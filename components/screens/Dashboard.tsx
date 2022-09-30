import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@mui/material";
import NavbarLabor from "../common/NavbarLabor";
import NavbarEmployer from "../common/NavbarEmployer";

function Dashboard({ type }: { type: string }) {
    return (
        <div>
            {type == "employer" ? <NavbarEmployer /> : <NavbarLabor />}
            <Button onClick={() => signOut()}>SignOUT MF</Button>
        </div>
    );
}

export default Dashboard;
