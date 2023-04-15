import axios from "axios";
import { AuthResponse} from "../pages/auth/authSlice";

const loginUserService = (username: string, password: string) => {
    return axios.post<AuthResponse>(
        "https://social-media-backend.sririshi.repl.co/auth/login",
        {
            username: username,
            password: password
        }
    )
}

const registerUserService = (username: string, password: string, firstname: string, lastname: string) => {
    return axios.post(
        "https://social-media-backend.sririshi.repl.co/auth/register",
        {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname
        }
    )
}

export {loginUserService, registerUserService}