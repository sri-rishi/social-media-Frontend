import { Button } from "../index";
import { GiFeather } from "../../assets";
import { openNewPostModal } from "../newPostBox/newPostSlice";
import { useDispatch } from "react-redux";

export const FloatPostBtn: React.FC = () => {
    const dispatch = useDispatch();
    
    return (
        <Button 
            onClick={() => dispatch(openNewPostModal())} 
            className={
                `md:hidden fixed z-30 bottom-20 right-6 rounded-full w-14 h-14 bg-teal-600 flex flex-row items-center justify-center text-xl text-white shadow-all`
            } 
            icon={<GiFeather />}
        />
    )
}