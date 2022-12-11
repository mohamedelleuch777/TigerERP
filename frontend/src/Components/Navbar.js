import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';
import './Navbar.css'

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return <header className="top-bar">
        <Link to="/">
            <h1>Home Page</h1>
        </Link>
        <div>
            { user && (
                <div>
                    <span>{user.data}</span>
                    <button className="topbar-logout" onClick={handleClick}>Logout</button>
                </div>
            )}
            { !user && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )}
        </div>
    </header>
}


export default Navbar;