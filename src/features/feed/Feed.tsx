import { useDispatch } from "react-redux";
import {Button} from "../../components/index";
import { openNewPostModal } from "../../components/newPostBox/newPostSlice";
import { AppDispatch } from "../../app/store";

const shownPosts:Array <string> = [];

export const Feed: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="main w-full min-h-screen mt-16 pt-4 md:pt-0 flex flex-col items-center gap-4 border-x md:mt-0 md:w-5/6 md:ml-1/6">
            <div 
                className="w-full flex flex-row items-center justify-between max-w-xl bg-white px-4 py-2 rounded border"
                onClick={() => dispatch(openNewPostModal())}
            >
                <div className="flex flex-row items-center gap-4">
                    <img src="" alt="user pic"/>
                    <input 
                        className="focus:outline-transparent w-full bg-transparent hover:cursor-text" 
                        placeholder={`What's on your mind, Rishi`} 
                        disabled
                    />
                </div>
                <Button 
                    className={"font-semibold bg-sky-600 py-1 px-6 rounded-2xl text-white hover:bg-teal-700"} 
                    text={"Add"}
                    onClick={() => dispatch(openNewPostModal())}
                />
            </div>
            <div className="w-full flex flex-col items-center gap-4">
                {
                   shownPosts.length !== 0 ?
                   shownPosts.map(post => (
                    <div>Post</div>
                   )) :
                   <p>Start following to see some post</p>
                }
            </div>
        </div>
    )
}