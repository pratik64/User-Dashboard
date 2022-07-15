import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";


function ProtectRoute({children}: any) {
    const state = useSelector((state: any) => state.loginReducer)
    const location = useLocation()
    if(!state.isLoggedIn) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }

    return children;
}


export default ProtectRoute;