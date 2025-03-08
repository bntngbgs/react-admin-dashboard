import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setUser } = useAuth();

  const refresh = async () => {
    const response = await axios.get('api/auth/refresh', {
      withCredentials: true,
    });

    setUser((prevState) => ({
      ...prevState,
      accessToken: response.data.accessToken,
    }));
  };

  return refresh;
};
export default useRefreshToken;
