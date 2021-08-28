import { HeartIcon, HeartBrokenIcon, IconButton, ShoppingCartIcon } from 'evergreen-ui'
import { IProduct } from '../models/IProduct'
import { useAppDispatch } from '../store/hooks'
import { addFavorite, removeFavorite } from '../store/slices/favorites/favoritesSlice'
import { addToCart } from '../store/slices/shoppingCart/shoppingCartSlice'

const Product = (props: IProduct) => {
    const dispatch = useAppDispatch()
    return (
        <div className="product">
            <img className="main-page-img" src={props.image} alt="product" />
            <p className="product-title">{props.name}</p>
            <div className="product-buttons">
                {!props.isFavorite? <IconButton onClick={()=> dispatch(addFavorite({...props, isFavorite: true}))} icon={HeartIcon} /> : <IconButton onClick={()=> dispatch(removeFavorite(props))} icon={HeartBrokenIcon} /> }
                
                <IconButton icon={ShoppingCartIcon} onClick={()=> dispatch(addToCart({product: {...props}, quantity: props.quantity? props.quantity + 1: 1 }))} />
            </div>
        </div>
    )
}

export default Product
