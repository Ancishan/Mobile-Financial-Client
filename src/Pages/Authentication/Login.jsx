import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  const { signIn, loading, setLoading, resetPassword } = useAuth();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const emailOrPhone = form.emailOrPhone.value;
    const password = form.password.value;

    try {
      setLoading(true);
      const isEmail = emailOrPhone.includes('@');
      await signIn(emailOrPhone, password, isEmail);
      navigate(from);
      toast.success('Login Successful');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!emailOrPhone) return toast.error('Please enter your email or phone number!');
    try {
      setLoading(true);
      const isEmail = emailOrPhone.includes('@');
      await resetPassword(emailOrPhone, isEmail);
      toast.success('Request Success! Check your email or phone for further process...');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>MTEPF || Login</title>
      </Helmet>

      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col w-full md:w-1/3 p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">Sign in to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label htmlFor="emailOrPhone" className="block mb-2 text-sm">Email or Phone Number</label>
                <input
                  type="text"
                  name="emailOrPhone"
                  onBlur={e => setEmailOrPhone(e.target.value)}
                  id="emailOrPhone"
                  required
                  placeholder="Enter Your Email or Phone Number Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">Password</label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  required
                  placeholder="*******"
                  onChange={e => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="bg-gray-500 w-full rounded-md py-3 text-white"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              onClick={handleResetPassword}
              className="text-xs hover:underline hover:text-rose-500 text-gray-400"
            >
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?{' '}
            <Link to="/reg" className="hover:underline hover:text-rose-500 text-gray-600">
              Sign up
            </Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
