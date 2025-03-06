import { Outlet, Navigate } from 'react-router';
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);

  return user.token ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
