import {useAuth} from "../hooks/useAuth";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({auth = false, to = "/"}) => {
  const {user} = useAuth();

  if (!user === auth) {
    return <Navigate to={to}/>;
  }

  return <Outlet/>;
};

export default ProtectedRoute;
