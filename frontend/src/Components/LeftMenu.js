// import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';
import './LeftMenu.css';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return  <section className="left-menu">
                <ul>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                    <li>item1</li>
                </ul>
            </section>
}


export default Navbar;