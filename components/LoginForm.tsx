import type React from "react"

const LoginForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#1a365d" strokeWidth="4" fill="none" />
          <path d="M20 32h24M32 20v24M44 32l-8-8M44 32l-8 8" stroke="#1a365d" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800">AAPG RGIPT SC Portal</h1>
        <p className="text-gray-600 mt-2">Access your workspace</p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <div>
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">
          Don't have an account?
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Contact your administrator
          </a>
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-center text-gray-500">
          This is a secure system and all activities are monitored. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  )
}

export default LoginForm

