import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Login, SignUp } from "../features";
import { useEffect } from "react";

export const AllRoutes: React.FC = () => {
  const location = useLocation();
  const pathname: string = location.pathname;

  useEffect(() => {
    document.title = pathname === "/" ? "M&T" : pathname.slice(1);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
