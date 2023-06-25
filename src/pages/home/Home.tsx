import { Sidebar } from "../../components"
import { NewPostBox } from "../../components/newPostBox/NewPostBox"

export const Home: React.FC = () => {
    return(
        <div className="flex flex-row ">
            <NewPostBox />
            <Sidebar />
            <div>Feed box</div>
            <div>Followbar</div>
        </div>
    )
}
