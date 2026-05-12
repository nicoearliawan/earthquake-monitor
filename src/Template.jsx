import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";

export default function Template() {
    return (
        <>
            <NavbarComp />
            {/* digunakan untuk menentukan (wadah) pengisi component tambahan selain <NavbarComp /> */}
            <Outlet />
        </>
    )
}