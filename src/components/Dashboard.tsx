import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context";

type DashboardProps = {};

export const Dashboard: React.FC<DashboardProps> = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate('/login'); // login page
    }

    return (
        <div className="text-center">
            <div className="m-4">
                <p className="mb-5">Email: {currentUser?.email}</p>
                <Link to='/update-profile'
                    className="mt-5 bg-blue-500 px-4 py-2 rounded text-white">
                    Update Profile
                </Link>
            </div>

            <button
                className="mt-5 bg-blue-500 px-4 py-2 cursor-pointer rounded text-white"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}