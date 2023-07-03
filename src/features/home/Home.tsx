import { Sidebar } from "../../components"
import { NewPostBox } from "../../components/newPostBox/NewPostBox"
import { Feed } from "./Feed"

export const Home: React.FC = () => {
    return(
        <div className="md:flex w-full flex-row relative">
            <NewPostBox />
            <Sidebar />
            <Feed />
            <div>Followbar</div>
        </div>
    )
}
