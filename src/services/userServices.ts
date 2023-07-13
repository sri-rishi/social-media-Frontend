import axios, { AxiosResponse } from "axios"

const getUsersData = (): Promise<AxiosResponse> => {
    return axios.get("https://social-media-backend.sririshi.repl.co/user")
}


const followUser = (
    targetUserId: string,
    userId: string,
    token: string
): Promise<AxiosResponse> => {
    return axios.post(
        `https://social-media-backend.sririshi.repl.co/user/${targetUserId}/follow`,
        {
            currentUserId: userId,
        },
        {
            headers: {
                authorization: token
            }
        }
    )
}

const unFollowUser = (
    targetUserId: string,
    userId: string,
    token: string
): Promise<AxiosResponse> => {
    return axios.post(
        `https://social-media-backend.sririshi.repl.co/user/${targetUserId}/unfollow`,
        {
            currentUserId: userId,
        },
        {
            headers: {
                authorization: token
            }
        }
    )
}

export { getUsersData, followUser, unFollowUser }