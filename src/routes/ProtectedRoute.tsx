
import { useEffect, useState, useContext, Fragment, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

interface IProtectedRoute {
  children: React.ReactNode
}

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userAuthenticated } = useContext(UserContext)
  const navigate = useNavigate();

  const checkUserToken = () => {
    if (userAuthenticated.name === '') {
      setIsLoggedIn(false);
      return navigate('/loginUser');
    }
    setIsLoggedIn(true);
  }
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return (
    <Fragment>
      { isLoggedIn ? children : null }
    </Fragment>
  );
}


