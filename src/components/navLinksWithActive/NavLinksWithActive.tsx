import { NavLink, useLocation} from "react-router-dom";
import { CSSProperties } from "react";

type NavLinkWithActiveProps = {
    to: string;
    children: React.ReactNode;
  };
  
export const NavLinkWithActive: React.FC<NavLinkWithActiveProps> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const activeStyle: CSSProperties = {
        background: isActive ? "white" : undefined,
        color: isActive ? "rgb(56 189 248)" : undefined,
        boxShadow: isActive
        ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        : undefined,
        borderRadius: isActive ? "1rem" : undefined,
    };

    return (
        <NavLink to={to} style={activeStyle}>
        {children}
        </NavLink>
    );
};