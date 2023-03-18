import {useAuth} from "../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const ProtectedRoute = () => {
  const {user} = useAuth();
  const location = useLocation();
  return user ? <Outlet/> : <Navigate to='/movies' state={{from: location}}/>;
}


export default ProtectedRoute;
