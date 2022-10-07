import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
  const user = useSelector(state => state.userSlice)

  if (user) {
    return <Outlet />
  } else { 
    return <Navigate to='/' />
  }

}

export { ProtectedRoutes }