import styles from "./ItemListContainers.module.css"
const ItemListContainers = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">TECNOLOGIA</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">HOGAR</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">BELLEZA Y FITNESS</a>
            </li>
            <li className="nav-item">
                <a className={`nav-link active ${styles['custom-input']}`} aria-current="page" href="#">CLIMATIZACION</a>
            </li>
        </ul>
    )
}

export default ItemListContainers