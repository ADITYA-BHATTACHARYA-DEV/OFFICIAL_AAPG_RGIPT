import type React from "react"

const SignUpForm: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg mx-4">
      <div className="text-center mb-8">
        <svg className="mx-auto mb-4" width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" stroke="#1a365d" strokeWidth="4" fill="none" />
          <path d="M20 32h24M32 20v24M44 32l-8-8M44 32l-8 8" stroke="#1a365d" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800">Create Your Account</h1>
        <p className="text-gray-600 mt-2">Join the Energy Solutions Network</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="company">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="job-title">
              Job Title
            </label>
            <input
              type="text"
              id="job-title"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="sector">
            Industry Sector
          </label>
          <select
            id="sector"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select your sector</option>
            <option value="upstream">Upstream Operations</option>
            <option value="midstream">Midstream Operations</option>
            <option value="downstream">Downstream Operations</option>
            <option value="services">Oilfield Services</option>
            <option value="renewable">Renewable Energy</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Work Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label className="ml-2 block text-sm text-gray-700" htmlFor="terms">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </a>
            </label>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="updates"
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700" htmlFor="updates">
              I would like to receive industry updates and newsletters
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">
          Already have an account?
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in here
          </a>
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-xs text-center text-gray-500">
          This is a secure system and all activities are monitored. By creating an account, you agree to our security
          protocols and data protection standards.
        </p>
      </div>
    </div>
  )
}

export default SignUpForm

