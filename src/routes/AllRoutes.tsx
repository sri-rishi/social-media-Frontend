import { Routes, Route} from "react-router-dom";
import { Login, SignUp, Template, Feed } from "../features";


export const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element= {
          <Template>
            <Feed />
          </Template>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
};
