import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";
import imageLogo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

export default function NavbarComp() {

    const location = useLocation();

    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                <img src={imageLogo}
                    className="mr-3 h-6 sm:h-9" alt="Earthquake Monitor" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Earthquake Monitor</span>
            </NavbarBrand>
            <NavbarCollapse className="px-10">
                <NavbarLink href="/" active={location.pathname === "/"}>Recent Earthquakes</NavbarLink>
                <NavbarLink href="/today" active={location.pathname === "/today"}>Today</NavbarLink>
                <NavbarLink href="/last-week" active={location.pathname === "/last-week"}>Last Week</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}