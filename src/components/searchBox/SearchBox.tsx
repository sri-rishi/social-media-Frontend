import {IoMdSearch} from "../../assets"
import { useState} from "react";

export const SearchBox: React.FC = () => {
    const [input, setInput] = useState("");
   
    return (
        <div className="flex flex-row items-center p-2 border-2 border-slate-200 rounded-md bg-white max-w-xl w-full gap-2 relative">
            {/* <Button className={"text-2xl"} icon={<IoMdSearch className=""/>} /> */}
            <IoMdSearch  className="text-2xl"/>
            <input
            className="grow focus:outline-none sm:text-sm"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
    )
}