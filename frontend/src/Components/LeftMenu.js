// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useLogout } from '../Hooks/useLogout';
import './LeftMenu.css';
import styles from './styles.module.css'

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return  <section className="left-menu">
                <ul className={styles.listUL}>
                    <Item label="Dashboard" icon="house" color="#4680ff" path="/" />
                    <Item label="Clients" icon="people" color="#FC6180" path="/client" />
                    <Item label="Products" icon="bag-plus" color="#7a52be" path="/products" />
                    <Item label="Stock" icon="bar-chart" color="#93BE52" path="/stock" />
                    <Item label="Users" icon="person-lock" color="#FFB64D" path="/login" />
                    <Item label="Help" icon="question" color="#ff4646" path="/" />
                </ul>
            </section>
}


export default Navbar;

const Item = (props) => {

    const [path,] = useState(props.path)

    const redirect = () => {
        window.location.href = path;
    }

    return (
        <li className={styles.item} onClick={redirect}>
            <div className={styles.iconContainer} style={{backgroundColor:props.color}}>
                {/* <i className={"fa fa-"+props.icon} aria-hidden="true"></i> */}
                <i className={"bi-"+props.icon}></i>
            </div>
            <h3 className={styles.itemText}>{props.label}</h3>
        </li>
    )
}