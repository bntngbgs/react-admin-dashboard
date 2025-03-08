import axios from '../api/axios';
import ErrorAuth from '../components/ErrorAuth';
import ErrorParagraph from '../components/ErrorParagraph';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state.from.pathname || '/';

  const [authError, setAuthError] = useState('');
  const [formError, setFormError] = useState({
    email: '',
    password: '',
  });

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useAuth();

  const handleChange = (e) => {
    setUserCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setFormError((prevState) => ({
      ...prevState,
      [e.target.name]: '',
    }));

    setAuthError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userCredentials.email == '') {
      setFormError((prevState) => ({
        ...prevState,
        email: 'Email field is required',
      }));
    }

    if (userCredentials.password == '') {
      setFormError((prevState) => ({
        ...prevState,
        password: 'Password field is required',
      }));
    }

    if (userCredentials.email == '' || userCredentials.password == '') return;

    try {
      const response = await axios.post(
        '/api/auth/login',
        {
          email: userCredentials.email,
          password: userCredentials.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      console.log(response.data.data);
      setUser(response.data.data);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response.data);
      setAuthError(error.response.data);
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
              className={` ring-1 w-full py-1.5 pl-3 rounded ${
                formError.email ? 'ring-red-500' : 'ring-slate-400'
              }`}
              value={userCredentials.email}
              onChange={handleChange}
            />
            {formError.email && <ErrorParagraph errorText={formError.email} />}
          </label>
          <label htmlFor="password" className="text-lg">
            <p className="mb-0.5 mt-3">Password :</p>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="your password..."
              className={` ring-1 w-full py-1.5 pl-3 rounded ${
                formError.password ? 'ring-red-500' : 'ring-slate-400'
              }`}
              value={userCredentials.password}
              onChange={handleChange}
            />
            {formError.password && (
              <ErrorParagraph errorText={formError.password} />
            )}
          </label>
          {authError && <ErrorAuth errorText={authError.message} />}
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
