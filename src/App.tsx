import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Dashboard, ForgotPassword, Login, SignUp, UpdateProfile } from "./components";
import { RequireAuth } from "./components/RequireAuth";
import { useAuth } from "./context";

export default function App() {
  const { message } = useAuth();
  return (
    <div className="sm:w-[550px] w-3/6 mx-auto">
      <nav>
        <ul className="flex justify-between bg-gray-800 text-white px-5 py-3 rounded-sm">
          <li className="">
            <Link to="/login">Login</Link>
          </li>
          <li className="">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>


      <div className="p-5 border">

        <div>
          {
            // Error message
            message.type === 'error' && message.info !== '' && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <p className="font-bold">{message.title}</p>
                <p>{message.info}</p>
              </div>
            )
          }
          {
            // Info message
            message.type === 'info' && message.info !== '' && (
              <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div className="flex">
                  <div className="py-1">
                    <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">{message.title}</p>
                    <p className="text-sm">{message.info}</p>
                  </div>
                </div>
              </div>
            )
          }

        </div>
        <Routes>
          <Route path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/update-profile"
            element={
              <RequireAuth>
                <UpdateProfile />
              </RequireAuth>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  )
}