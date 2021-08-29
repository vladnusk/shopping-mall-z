import CartProduct from './CartProduct'
import { IProduct } from '../models/IProduct'
import { CartItem } from '../store/slices/shoppingCart/shoppingCartSlice'


const CartGrid: React.FC<{ productsList: CartItem[] }> = ({ productsList }) => {
  
    return (
        <div className="cart-grid">

            {productsList.map((item: CartItem) => {
                return (
                    <CartProduct
                        key={item.product.productId}
                        {...item}                       
                        />
                )
            })}

        </div>
    )
}

export default CartGrid