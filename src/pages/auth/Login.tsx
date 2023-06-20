import { useState } from "react";
import {Link} from "react-router-dom";
import { Button } from "../../components";
import {useSelector, useDispatch} from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { loginUser } from "./authSlice";
import { AiOutlineEyeInvisible, AiOutlineEye } from "../../assets";

type LoginUserDetials = {
    username: string,
    password: string
}

export const Login: React.FC = () => {
    const {token} = useSelector((store: RootState) => store?.auth);
    const dispatch = useDispatch<AppDispatch>();
    const [loginDetails, setLoginDetails] = useState<LoginUserDetials>({
        username: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const loginHandler = () => {
        if(loginDetails.username !== "" && loginDetails.password !== "") {
            dispatch(loginUser(loginDetails))
        }
    };

    const testLoginHandler = () => {
        setLoginDetails(details => ({...details, username: "admin@gmail.com", password: "Admin@1234"}))
    }

    const handleTogglePassword = () => {
        setShowPassword((showPassword) => !showPassword);
    }
    
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="flex flex-col items-center bg-white shadow-md p-8 rounded-2xl gap-4 font-semibold border-y-8 border-y-teal-300">
                <div className="flex flex-col items-center gap-8 border-b-2 border-teal-300 pb-4">
                    <h4 className="text-2xl">Welcome to <span className="text-teal-400">meet&tweet</span></h4>
                    <p className="text-xl">Sign In</p>
                </div>
                <div className="w-full flex flex-col gap-4 items-start">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="username">
                            Username or Email
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal" 
                            type="text" 
                            name="username" 
                            placeholder="Username Or Email"
                            value={loginDetails.username}
                            onChange={(e) => setLoginDetails(details => ({...details, username: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password">
                            Password
                        </label>
                        <div className="w-full relative border-2 rounded">
                            <div className="w-full">
                                <input 
                                    className="w-full rounded  p-2"
                                    type={showPassword ? "text" : "password"} 
                                    name="password" 
                                    placeholder="Password"
                                    value={loginDetails.password}
                                    onChange={(e) => setLoginDetails(details => ({...details, password: e.target.value}))}
                                />
                            
                            </div>

                            <Button
                                onClick={() =>  handleTogglePassword()}
                                className="text-2xl absolute bottom-2 right-5 "
                                icon = {
                                    showPassword 
                                    ?
                                    <AiOutlineEyeInvisible />
                                    :
                                    <AiOutlineEye />
                                }
                             />
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4 py-2">
                    <Button 
                        onClick={() => loginHandler()}
                        className={"w-full bg-teal-500 p-2 rounded-2xl text-white hover:bg-teal-700"} 
                        text={"Sign In"}
                    />
                    <Button 
                        onClick={() => testLoginHandler()}
                        className={"w-full bg-white p-2 border-sky-600 rounded-2xl text-teal-400 hover:bg-teal-700 hover:text-white"} 
                        text={"Sign In with test"}
                    />

                    <Link to="/register">
                        <p className="text-teal-400">
                            Create new account
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}