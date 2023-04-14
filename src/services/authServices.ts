import axios from "axios";
import { AuthResponse} from "../pages/auth/authSlice";

export const loginUserService = (username: string, password: string) => {
    return axios.post<AuthResponse>(
        "https://social-media-backend.sririshi.repl.co/auth/login",
        {
            username: username,
            password: password
        }
    )
}