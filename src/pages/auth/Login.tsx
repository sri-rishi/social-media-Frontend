import { useState } from "react";
import {Link} from "react-router-dom";
import { Button } from "../../components";

export const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    const loginHandler = () => {
        if(loginDetails.email !== "" && loginDetails.password !== "") {
            console.log("logged in")
        }
    };

    const testLoginHandler = () => {
        console.log("test logger")
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
                            value={loginDetails.email}
                            onChange={(e) => setLoginDetails(details => ({...details, email: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal"  
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={loginDetails.password}
                            onChange={(e) => setLoginDetails(details => ({...details, password: e.target.value}))}
                        />
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