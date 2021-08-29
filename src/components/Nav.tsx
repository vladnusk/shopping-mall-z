import { Link } from 'react-router-dom'
import { SearchInput, ShoppingCartIcon } from 'evergreen-ui'
import { selectProductFilters, setQuery } from '../store/slices/filterProducts/filterProducts'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const Nav = () => {

const dispatch = useAppDispatch()
const productFilters = useAppSelector(selectProductFilters);

    return (
        <div className="nav">
            <ul className="nav-menu-list">
                <li> <Link className="menu-item" to="/">Home</Link> </li>
                <li> <Link className="menu-item" to="/favorites">My Favorite</Link> </li>
            </ul>
            <SearchInput 
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(setQuery(e.target.value));
              }}
              value={productFilters.query || ''}
            placeholder="search products..." />
            <Link className="cart-btn" to="/cart"> <ShoppingCartIcon size={35} /> </Link>
          
        </div>
    )
}

export default Nav
