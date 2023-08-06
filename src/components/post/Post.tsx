import { Button, UserImage } from "../index";
import { RiHeart3Line, BsThreeDots, TbMessageCircle2, AiFillHeart} from "../../assets";
import { useSelector } from "react-redux";
import { useState} from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { Posts } from "./postSlice";

type Props = {
    post: Posts
}

export const Post: React.FC<Props> = ({post}) => {
    const  {
        _id,
        userId,
        desc,
        likes: {
            likedBy,
            likeCount
        },
        image,
        comments,
        scheduledTime,
        sharedTo,
        createdAt,
        updatedAt,
        } = post

    const {users} = useSelector((store: RootState) => store?.users);
    const {user} = useSelector((store: RootState) => store?.auth);
    const [showFullContent, setShowFullContent] = useState(false);
    const [showPostMenu, setShowPostMenu] = useState(false);
    const isLike = true;

    const userDetails = users?.find(person => person._id === userId);

    const editMenuHandler = () => {
        setShowPostMenu(dispaly => !dispaly);
    }  

    const postTime = () => {
        const date = new Date(createdAt);
        const postDate = date.getDate() +
        " " +
        date.toLocaleString("default", { month: "long" }) +
        ", " +
        date.getFullYear();
        return postDate;
    } 
    
    return (
        <div className="flex flex-col border w-full gap-4 bg-white max-w-xl rounded py-4">
            <div className="flex flex-row items-center justify-between px-3">
                <div className="flex flex-row items-center gap-2.5">
                    <UserImage imgSrc={userDetails?.profilePicture} width={"w-14"} alt={"Profile Picture"}/>
                    <div className="flex flex-col">
                        <Link 
                            to={
                                userDetails?.username === user?.username ? 
                                "/profile" : 
                                `/userProfile/${userDetails?._id}`
                            }
                        >
                            <div className="flex flex-row items-center gap-1.5">
                                <p className="text-lg font-medium">{`${userDetails?.firstname} ${userDetails?.lastname}`}</p>
                                <p className="font-medium text-gray-400">@{userDetails?.userHandler}</p>
                            </div>
                        </Link>
                        <small className="text-gray-600">{postTime()}</small>
                    </div>
                </div>
                
                {
                    userDetails?.username === user?.username ? 
                    <div className="relative">
                        <Button 
                            className={"rounded-full p-2 text-xl text-gray-400 hover:bg-gray-400 hover:text-white"} 
                            icon={<BsThreeDots />}
                            onClick={() => setShowPostMenu(dispaly => !dispaly)}
                        />
                        <ul 
                            className={`${showPostMenu ? "flex" : "hidden"} flex-col items-center absolute top-full right-4 font-semibold text-gray-500 bg-white border border-gray-400`}
                        >
                            <li 
                                className="px-4 py-2 border-b border-gray-400 hover:text-gray-700 hover:cursor-pointer"
                                onClick={() => editMenuHandler()}
                            >
                                Edit 
                            </li>
                            <li 
                                className="px-4 py-2 text-red-600 hover:cursor-pointer"
                            >
                                Delete
                            </li>
                        </ul>
                    </div>
                    : <></>
                }
            </div>
            
            <div className="flex flex-col gap-4 px-3">
                <Link className="w-full" to={`/post/${_id}`}>
                    {
                        image ?
                        <div className="w-full px-8 py-4">
                            <img className="w-full object-cover" src={image} alt="feed cover" />
                        </div>
                        : <></>
                    }
                    <div className="text-left flex flex-col gap-2 px-3">
                        {
                            !showFullContent && desc.length > 250?
                            <p>
                                {[...desc.split("")].slice(0, 250)}... 
                            </p>
                            : desc
                        }
                        {
                            desc.length > 250 &&
                            <span 
                                className="text-gray-400 hover:cursor-pointer" 
                                onClick={() => setShowFullContent(fullContent => !fullContent)}
                            >
                                {showFullContent ? "Show less" : "Show more"}
                            </span>
                        }
                    </div>
                </Link>   
                <div className="flex flex-row items-center justify-around px-3">
                    <div className="flex flex-row items-center gap-2">
                        <Button 
                            className={"hover:text-gray-600 text-xl"} 
                            icon={
                                isLike ? 
                                <AiFillHeart className="text-red-600"/>
                                :
                                <RiHeart3Line />
                            }
                            onClick={() => console.log("liked post")}
                        />
                        {   likeCount > 0 &&
                            <p className="font-semibold">{likeCount.toString()}</p>
                        }
                    </div>

                    <Link to={`/post/${_id}`}>
                        <div className="flex flex-row items-center gap-2">
                            <p className={"hover:text-gray-600 text-xl"}> 
                                <TbMessageCircle2 /> 
                            </p>
                            <p className="font-semibold">{comments.length > 0 && comments.length}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}