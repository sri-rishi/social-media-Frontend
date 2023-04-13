import { useState } from "react";
import {Link} from "react-router-dom"
import { Button } from "../../components";

export const SignUp = () => {
    const [signupDetails, setSignupDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    

    const signupHandler = () => {
        if(
            signupDetails.firstName !== "" &&
            signupDetails.lastName !== "" && 
            signupDetails.email !== "" && 
            signupDetails.password !== ""
        ) {
           console.log("signed Up")
        }
    }

    return (
        <div className="w-full h-screen flex flex-row justify-center items-center">
            <div className="w-full max-w-sm flex flex-col items-center bg-white shadow-md p-8 rounded-2xl gap-4 font-semibold border-y-8 border-y-teal-300">
                <div className="flex flex-col items-center gap-8 border-b-2 border-teal-300 pb-4">
                    <h4 className="text-2xl">Welcome to <span className="text-teal-400">meet&tweet</span></h4>
                    <p className="text-xl">Sign Up</p>
                </div>
                <div className="w-full flex flex-col gap-4 items-start">
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="firstName">
                            First Name
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal" 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name"
                            value={signupDetails.firstName}
                            onChange={(e) => setSignupDetails(details => ({...details, firstName: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="secondName">
                            Second Name
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal"  
                            type="text" 
                            name="secondName" 
                            placeholder="Second Name"
                            value={signupDetails.lastName}
                            onChange={(e) => setSignupDetails(details => ({...details, lastName: e.target.value}))}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="username">
                            Username or Email
                        </label>
                        <input 
                            className="border-2 p-2 rounded font-normal" 
                            type="text"    
                            name="username" 
                            placeholder="Username Or Email"
                            value={signupDetails.email}
                            onChange={(e) => setSignupDetails(details => ({...details, email: e.target.value}))}
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
                            value={signupDetails.password}
                            onChange={(e) => setSignupDetails(details => ({...details, password: e.target.value}))}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4 py-2">
                    <Button 
                        className={"w-full bg-teal-500 p-2 rounded-2xl text-white hover:bg-teal-700"}
                        text={"Sign Up"}
                        onClick={() => signupHandler()}
                    />
                    <Link to="/login">
                        <p className={"text-teal-400"}>Already have account ?</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}