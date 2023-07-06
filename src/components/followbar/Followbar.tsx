import { Button, UserImage, SearchBox } from "../index";
import { Link } from "react-router-dom";

const shownUsers = [
    {
        _id: "1", 
        firstName: "Rahul", 
        lastName: "Kumar", 
        profilePic: ""
    },
    {
        _id: "22", 
        firstName: "Rahul", 
        lastName: "Kumar", 
        profilePic: ""
    },
    {
        _id: "3", 
        firstName: "Rahul", 
        lastName: "Kumar", 
        profilePic: ""
    }
]

export const FollowBar: React.FC = () => {

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
                                shownUsers.map(({_id, firstName, lastName, profilePic}) => (
                                    <div 
                                        key={_id}
                                        className="flex flex-row items-center justify-between py-2 px-1 hover:bg-slate-100"
                                    >
                                        <div className="flex flex-row items-center gap-2">
                                            <UserImage 
                                                imgSrc={
                                                    profilePic && profilePic
                                                }
                                                alt={
                                                    firstName && firstName
                                                }
                                                width={"w-10"}
                                            />
                                            <Link to={`/userProfile/${_id}`}>
                                                <p className="font-semibold text-sm">{`${firstName} ${lastName}`}</p>
                                            </Link>
                                        </div>
                                        <Button 
                                            className="bg-teal-600 py-1 px-3 rounded-2xl text-white hover:bg-teal-700" 
                                            text={"Follow"}
                                            onClick={() => console.log(_id)}
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