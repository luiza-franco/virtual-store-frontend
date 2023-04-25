import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <nav className={styles.navbar}> 
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">HOME</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/products">PRODUTOS</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/shopping/cart">CARRINHO DE COMPRAS</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar