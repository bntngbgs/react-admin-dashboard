import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
import Loader from '../Loader';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !user.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen w-full flex items-center">
          <Loader size={100} borderSize={16} />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
