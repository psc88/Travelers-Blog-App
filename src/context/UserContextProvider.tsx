import { FC, ReactNode, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../interfaces/User.interface"
import { UserContext } from "./UserContext"

interface IUserContextProviderProps {
  children: ReactNode | ReactNode[]
}

const UserContextProvider: FC<IUserContextProviderProps> = ({
  children
}) => {
  const cookieSession = JSON.parse(sessionStorage.getItem('user')!) as User
  const initialState = {
    email: '',
    name: '',
    password: '',
    id: 0
  }
  const userState: User = cookieSession ?? initialState
  
  const [userAuthenticated, setUserAuthenticated] = useState<User>(userState)
  const navigate = useNavigate()

  const logout = () => {
    setUserAuthenticated(initialState)
    sessionStorage.removeItem('user');

    navigate('/loginUser')
  }

  const value = useMemo(() => ({
    userAuthenticated,
    setUserAuthenticated,
    logout
  }), [userAuthenticated, setUserAuthenticated])


  return (
    <UserContext.Provider value={value} key="UserContext">
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider