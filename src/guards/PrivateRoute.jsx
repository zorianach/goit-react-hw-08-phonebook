// import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
// import { selectIsAuth } from "../redux/selectors"
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
  
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };
    
   