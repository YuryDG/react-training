import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context';

type RequireAuthProps = {}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return <>{children}</>
}