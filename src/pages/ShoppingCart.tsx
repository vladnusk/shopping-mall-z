
import CartGrid from '../components/CartGrid'
import { Button } from 'evergreen-ui'
import { useAppSelector } from '../store/hooks';
import {selectCartItems} from '../store/slices/shoppingCart/shoppingCartSlice'
import { removeFromCart } from '../store/slices/shoppingCart/shoppingCartSlice'
const ShoppingCart = () => {
    const cartProducts = useAppSelector(selectCartItems);
    
  
    return (
        <>
        <h1 className="cart-header">Cart</h1>
            <CartGrid productsList={cartProducts} />
           
         <div className="checkout-btn"> <Button marginRight={16} appearance="primary">
        Checkout
      </Button></div>
           

        </>
    )
}

export default ShoppingCart
