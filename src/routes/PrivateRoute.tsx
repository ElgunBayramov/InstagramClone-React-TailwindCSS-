import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

function PrivateRoute({ children }:any) {
    const currentUser = useAppSelector((state)=>state.auth); 
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/auth/login', { replace: true, state: { return_url: location.pathname } });
        }
    }, [currentUser, navigate, location]);

    return currentUser ? children : null;
}

export default PrivateRoute;
