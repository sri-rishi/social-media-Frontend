import axios from "axios"

const getUsersData = () => {
    return axios.get("https://social-media-backend.sririshi.repl.co/user")
}

export { getUsersData }