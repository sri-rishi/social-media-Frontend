import {Routes, Route, useLocation} from "react-router-dom"
import { Login, SignUp } from "../pages"
import { useEffect } from "react";

export const AllRoutes = () => {
    const location = useLocation();
    const pathname:string = location.pathname;

    useEffect(() => {
        document.title = pathname === "/" ? "M&T" : pathname.slice(1);
    }, [pathname]);
    
    return(
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}