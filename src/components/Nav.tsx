import { Link } from 'react-router-dom'
import { SearchInput, ShoppingCartIcon } from 'evergreen-ui'
const Nav = () => {
    return (
        <div className="nav">
            <ul className="nav-menu-list">
                <li> <Link className="menu-item" to="/">Home</Link> </li>
                <li> <Link className="menu-item" to="/favorites">My Favorite</Link> </li>
            </ul>
            <SearchInput placeholder="search products..." />
            <Link className="cart-btn" to="/cart"> <ShoppingCartIcon size={35} /> </Link>
            {/* <IconButton icon={ShoppingCartIcon} iconSize={30} /> */}
        </div>
    )
}

export default Nav
