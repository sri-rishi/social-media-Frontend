import { Button, UserImage } from "../index";
import {FiLogOut} from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import { AppDispatch } from "../../app/store";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    return(
        <nav className="w-full flex flex-row items-center justify-between py-3 px-4 bg-white fixed z-50 top-0 shadow md:hidden">
            <div className="flex flex-row items-center gap-4">
                <UserImage imgSrc="" alt="user" width={"w-10"}/>
                <Link to="/">
                    <h1 className="text-2xl font-semibold">M&T</h1>
                </Link>
            </div>
            <Button 
                className={"text-2xl hover:text-sky-400"}  
                icon={<FiLogOut />}
                onClick={() => dispatch(logoutUser())}
            />
        </nav>
    )
}