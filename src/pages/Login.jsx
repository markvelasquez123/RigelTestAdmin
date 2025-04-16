import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Add authentication logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-300 to-blue-900 px-4 py-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 space-y-6 transition duration-500 ease-in-out transform hover:scale-[1.01]">
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-extrabold text-gray-800">Admin Login</h1>
          <p className="text-sm text-gray-500">Enter your credentials to continue</p>
        </div>

        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-inner">
            <div className="bg-blue-900 p-4 rounded-lg shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="text-sm text-gray-600 font-medium">Email Address</label>
            <div className="mt-2 flex items-center border border-gray-300 rounded-md px-4 py-3 bg-gray-50 focus-within:border-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
              </svg>
              <input
                type="email"
                id="email"
                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="text-sm text-gray-600 font-medium">Password</label>
            <div className="mt-2 flex items-center border border-gray-300 rounded-md px-4 py-3 bg-gray-50 focus-within:border-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type="password"
                id="password"
                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <a href="#" className="hover:underline text-blue-900">Forgot password?</a>
          <a href="#" className="hover:underline text-blue-900">Create account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
