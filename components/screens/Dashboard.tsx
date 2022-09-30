import React from "react";
import NavbarLabor from "../common/NavbarLabor";
import NavbarEmployer from "../common/NavbarEmployer";

function Dashboard({ type }: { type: string }) {
    return (
        <div>
            {type == "employer" ? <NavbarEmployer /> : <NavbarLabor />}
        </div>
    );
}

export default Dashboard;
