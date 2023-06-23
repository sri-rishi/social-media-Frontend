import { Sidebar } from "../../components"

export const Home: React.FC = () => {
    return(
        <div className="flex flex-row ">
            <Sidebar />
            <div>Feed box</div>
            <div>Followbar</div>
        </div>
    )
}
