import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5500/api/users/login',
        {
          email: userCredentials.email,
          password: userCredentials.password,
        }
      );

      setUser(response.data.data);
      navigate('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <header className="shadow-lg flex w-full items-center p-2 py-4 sm:px-4 md:px-8">
        <h1 className="font-logo text-xl sm:text-2xl md:text-3xl text-custom-blue-1 mx-auto mt-0.5">
          YOUR MARKETPLACE
        </h1>
      </header>
      <section className="px-4 md:px-8 mt-28 sm:mt-48">
        <h1 className="text-3xl text-center font-bold text-custom-blue-2">
          User Login
        </h1>
        <form className="max-w-lg mx-auto mt-3 sm:mt-8" onSubmit={handleLogin}>
          <label htmlFor="email" className="text-lg">
            <p className="mb-0.5">Email :</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email address..."
              className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
              value={userCredentials.email}
              onChange={(e) =>
                setUserCredentials((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="password" className="text-lg">
            <p className="mb-0.5 mt-3">Password :</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password..."
              className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
              value={userCredentials.password}
              onChange={(e) =>
                setUserCredentials((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </label>

          <button
            type="submit"
            className="mt-6 py-2 rounded bg-custom-blue-2 font-semibold tracking-wide text-white-smoke w-full cursor-pointer"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};
export default Login;
