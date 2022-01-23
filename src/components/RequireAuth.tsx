import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context';

type RequireAuthProps = {}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.currentUser) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return <>{children}</>
}