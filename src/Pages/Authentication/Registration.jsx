import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { createUser, loading, setLoading, setUser } = useAuth();
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;

    if (password.length < 5) {
      toast.error('Password must be at least 5 digits long');
      return;
    }

    try {
      setLoading(true);
      const result = await createUser(email, password, number);

      await axiosPublic.post('/users', { name, email, number });

      // Manually update the user state
      setUser({
        ...result.user,
        displayName: name,
      });

      navigate('/');
      toast.success('Signup Successful');
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordInput = (e) => {
    const value = e.target.value;
    const numericOnly = /^[0-9]*$/;

    if (!numericOnly.test(value)) {
      toast.error('Password must be numeric only');
    } else {
      setPassword(value);
    }
  };

  const handlePasswordBlur = () => {
    if (password.length < 5) {
      toast.error('Password must be at least 5 digits long');
    }
  };

  return (
    <>
      <Helmet>
        <title>MTEP | Sign Up</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Sign up to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 text-sm">Phone Number</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="Enter Your Number Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  name="password"
                  id="password"
                  required
                  placeholder="Enter Your Password (digits only)"
                  value={password}
                  onInput={handlePasswordInput}
                  onBlur={handlePasswordBlur}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>
            <div>
              <button
                disabled={loading}
                type="submit"
                className="bg-black w-full rounded-md py-3 text-white"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="hover:underline hover:text-rose-500 text-gray-600">Log In</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Registration;
