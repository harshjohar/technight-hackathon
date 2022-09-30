import React from "react";
import NavbarLabor from "../common/NavbarLabor";
import NavbarEmployer from "../common/NavbarEmployer";
import Employer from "./Employer";
import Labourer from "./Labourer";

function Dashboard({ type }: { type: string }) {
    return (
        <div>
            {type == "employer" ? <NavbarEmployer /> : <NavbarLabor />}
            {type == "employer" ? <Employer /> : <Labourer />}
        </div>
    );
}

export default Dashboard;
