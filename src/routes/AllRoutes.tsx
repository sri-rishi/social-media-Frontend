import {useEffect} from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import { Login, SignUp, Template, Feed } from "../features";


export const AllRoutes: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname === "/" ? "M&T" : location.pathname.slice(1);
  }, [location.pathname]);

  return (
    <Routes>
      <Route 
        path="/" 
        element= {
          <Template>
            <Feed />
          </Template>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
