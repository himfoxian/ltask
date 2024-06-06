import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Welcome Back!</h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;


