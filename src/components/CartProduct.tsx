
import {IconButton, PlusIcon, MinusIcon} from 'evergreen-ui'
import { useAppDispatch } from '../store/hooks'
import { addOne, removeOne, removeFromCart, CartItem} from '../store/slices/shoppingCart/shoppingCartSlice'


const CartProduct = (props: CartItem) => {
    
    const dispatch = useAppDispatch()
    return (
        <div className="product-cart">
<div className="cart-item-desc">
        <img src={props.product.image} alt="product" />
        <p className="product-cart-title">{props.product.name}</p>
        </div>
        <div className="product-quantity-controls">
           
            <IconButton onClick={()=> {props.quantity > 1 ? dispatch(removeOne(props)) : dispatch(removeFromCart(props)) }} icon={MinusIcon} />
            <p className="quantity">{props.quantity}</p>
            <IconButton onClick={()=> dispatch(addOne(props))} icon={PlusIcon} />
        </div>
    </div>
    )
}

export default CartProduct
