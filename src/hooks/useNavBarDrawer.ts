import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const useNavBarDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { userAuthenticated, logout } = useContext(UserContext)
  const navigate = useNavigate();
  
  const handleOnclickHome = () => {
    navigate('/home')
    setOpenDrawer(false)
  }

  const handleOnclickadmin = () => {
    navigate('/admin')
    setOpenDrawer(false)
  }

  const handleOnclicklogOut = () => {
    logout();
    setOpenDrawer(false)
  }

  const handleOnclickloginUser = () => {
    navigate('/loginUser')
    setOpenDrawer(false)
  }
  
  return {
    openDrawer,
    setOpenDrawer,
    handleOnclickHome,
    handleOnclickadmin,
    handleOnclicklogOut,
    handleOnclickloginUser,
    userAuthenticated
  }
}

export default useNavBarDrawer;