import { useLocation, Outlet, Navigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ProtectedRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
export default ProtectedRoutes;
