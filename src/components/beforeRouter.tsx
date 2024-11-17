import { useRoutes, RouteObject, Navigate, useLocation } from 'react-router-dom';

export const BeforeRouter = (props: { children: JSX.Element }) => {

    const token = localStorage.getItem('token');
    const { children } = props;
    const { pathname } = useLocation();

    if (pathname == '/login') {
        return children;
    }

    if (!token) {
        return <Navigate to='/login' />
    } else {
        return children;
    }
}

export default BeforeRouter;
