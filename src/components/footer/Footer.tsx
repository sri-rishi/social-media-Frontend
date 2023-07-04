import {IoBookmarkOutline, GoHome, IoMdSearch, CgProfile} from "../../assets";
import { NavLinkWithActive } from "../navLinksWithActive/NavLinksWithActive";

export const Footer: React.FC = () => {
    return (
        <footer className="bottom-0 fixed shadow-top bg-white flex flex-row w-full justify-around py-5 px-4 text-2xl md:hidden">
            <NavLinkWithActive to="/">
                <p className="p-2"><GoHome /></p> 
            </NavLinkWithActive>
            <NavLinkWithActive to="/explore">
                <p className="p-2"> <IoMdSearch /></p>
            </NavLinkWithActive>
            <NavLinkWithActive to="/bookmarks">
                <p className="p-2"> <IoBookmarkOutline /></p>
            </NavLinkWithActive>
            <NavLinkWithActive to="/profile">
                <p className="p-2"> <CgProfile /></p>
            </NavLinkWithActive>
        </footer>
    )
}