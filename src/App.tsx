import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Dashboard, Login, SignUp } from "./components";

export default function App() {
  return (
    <div className="w-2/6 mx-auto">
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}