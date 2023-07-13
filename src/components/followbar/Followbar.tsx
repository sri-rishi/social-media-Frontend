import { Button, UserImage, SearchBox } from "../index";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { User} from "../../features/auth/authSlice.types";
import { followUnFollowUser } from "../../features/profilePage/userSlice";

export const FollowBar: React.FC = () => {
    const {users} = useSelector((store: RootState) => store?.users);
    const {user} = useSelector((store: RootState) => store?.auth);
    const dispatch = useDispatch<AppDispatch>();
    const [shownUsers, setShownUsers] = useState<User[] | []>([]);

    useEffect(() => {
        if (user) {
            setShownUsers(
                users
                .filter((person) => person.username !== user.username)
                .filter((person) => {
                    if (Array.isArray(user.following)) {
                        return !user.following.includes(person._id);
                    }
                    return true;
                })
                .slice(0, 4)
            );
        }
    }, [user, users]);

    const followHandler = (_id: string) => {
        const isFollower = user?.followers.includes(_id);
        if(user) {
            dispatch(followUnFollowUser({
                targetUserId: _id, 
                userId: user?._id, 
                isFollowed: isFollower ? true : false
            }))
        }
    }

    return (
        <div className="hidden w-1/4 lg:flex flex-col gap-8 fixed top-0 right-0 items-start p-4 xl:px-8">
                <div className="w-full flex flex-col items-center gap-4">
                    <SearchBox />
                    
                    <div className="w-full flex flex-col w-full bg-white rounded gap-4 py-2 px-4">
                        <div className="flex flex-col gap-4">
                            <div className="border-b py-2 px-1">
                                <p>People to follow</p>
                            </div>

                            {   
                            shownUsers.length > 0 ?
                                shownUsers.map(({_id, firstname, lastname, profilePicture}) => (
                                    <div 
                                        key={_id}
                                        className="flex flex-row items-center justify-between py-2 px-1 hover:bg-slate-100"
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserImage 
                                                imgSrc={
                                                    profilePicture && profilePicture
                                                }
                                                alt={
                                                    firstname && firstname
                                                }
                                                width={"w-10"}
                                            />
                                            <Link to={`/userProfile/${_id}`}>
                                                <p className="font-semibold text-sm">{`${firstname} ${lastname}`}</p>
                                            </Link>
                                        </div>
                                        <Button 
                                            className="bg-teal-600 py-1 px-3 rounded-2xl text-white hover:bg-teal-700" 
                                            text={"Follow"}
                                            onClick={() => 
                                                followHandler(_id)
                                            }
                                        />
                                    </div>
                                ) )
                                : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
}