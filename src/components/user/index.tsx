
import { Outlet } from 'react-router-dom';
import './index.scss';

const User = () => {
    return (
        <div className="user">
            <Outlet />
        </div>
    )
}

export default User;