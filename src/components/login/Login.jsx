import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="flex h-screen">
      {/* Left side - Image and welcome text */}
      <div className="w-1/2 relative hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          alt="Innovation Lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-5xl font-bold mb-4">WELCOME TO LEVEL NINE TECH</h1>
          <p className="text-xl">We Are A Community, Together To Grow Skill</p>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-full lg:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
        <a href="https://level9.tech" className="flex items-center mb-8 text-4xl font-extrabold text-gray-800">
          <img className="w-16 h-16 mr-4 rounded-full" src={logo} alt="logo" />
          Level Nine Technology
        </a>

        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Started</h2>
        <form className="space-y-4" action="#">
          <div>
            <input type="email" name="email" id="email" className="bg-white border-b-2 border-green-400 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Email" required />
          </div>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-white border-b-2 border-green-400 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
            >
              <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-green-300" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-600">Remember me</label>
              </div>
            </div>
            <a href="#" className="text-sm font-medium text-green-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Sign in
          </button>
          <p className="text-sm font-light text-gray-600">
            Don't have an account yet? <Link to="/register" className="font-medium text-green-600 hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
