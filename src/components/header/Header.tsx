import { useEffect } from "react";

type HeaderProp = {
    path: string
}

export const Header: React.FC<HeaderProp> = ({path}) => {
    const upperCaseText: string = path.slice(1, 2).toUpperCase();
    const lowerCaseText: string = path.slice(2);
    return (
        <header className="hidden md:flex border-b w-full p-4 text-left sticky top-0 left-0 bg-slate-100">
            <p className="text-lg font-semibold">
                {
                    path === "/" ? 
                    "Home" : 
                    path.split("").includes("4") ?
                    "Profile" : 
                    upperCaseText + lowerCaseText}
                </p>
        </header>
    )
}