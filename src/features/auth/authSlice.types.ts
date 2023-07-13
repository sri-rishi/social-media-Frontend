export type User = {
    _id: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    profilePicture: string,
    followers: Array<string>,
    following: Array<string>,
    createdAt: Date,
    updatedAt: Date,
}

export type AuthResponse = {
    user: User | null,
    token: string | null
}

export interface AuthState {
    user: User | null;
    token: string | null;
    error: string | null;
    authStatus: "idle" | "pending" | "fulfilled" | "rejected";
}

export type Loginuser = {
    username: string,
    password: string
}

export type RegisterUser = {
    username: string,
    password: string,
    firstname: string,
    lastname: string
}