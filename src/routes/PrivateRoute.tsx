import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PrivateRoute({ children }:any) {
    const user = false; 
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/auth/login', { replace: true, state: { return_url: location.pathname } });
        }
    }, [user, navigate, location]);

    return user ? children : null;
}

export default PrivateRoute;
