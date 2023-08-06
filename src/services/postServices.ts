import axios, { AxiosResponse } from "axios"

const getPosts = (): Promise<AxiosResponse> => {
    return axios.get("https://social-media-backend.sririshi.repl.co/posts")
}

export { getPosts }