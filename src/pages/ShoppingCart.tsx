
import CartGrid from '../components/CartGrid'
import { Button } from 'evergreen-ui'
import { useAppSelector } from '../store/hooks';
import {selectCartItems} from '../store/slices/shoppingCart/shoppingCartSlice'
import { selectFavorites } from '../store/slices/favorites/favoritesSlice';

const ShoppingCart = () => {
    const cartProducts = useAppSelector(selectCartItems);
    const favoriteProducts = useAppSelector(selectFavorites);
    
    let serializedData = cartProducts.map(item => ({
        ...item,
        isFavorite: !!favoriteProducts.find((favItem => favItem.productId === item.product.productId))
    }))
    .map(item => ({"itemId":item.product.productId, "isFavroite":  item.isFavorite}))

    const exportData = {
    "accountId": "<Account ID here>",
        "items": [
            {
        "itemId": "<string>",
        "isFavorite": "<boolean>",
            },
        serializedData
        ],
            "totalPrice": "<Total price here>" 
    }

    const data = new Blob([JSON.stringify(exportData)], {type: 'application/json'});
    const url = window.URL.createObjectURL(data);

    return (
        <>
        <h1 className="cart-header">Cart</h1>
        <CartGrid productsList={cartProducts} />
        <div className="checkout-btn">{cartProducts.length < 1 ? <p>Your cart is empty</p> : <Button marginRight={16} appearance="primary"> <a className="cart-btn-link" id="download_link" download="cart_items.json" href={url} >Checkout</a>
        
      </Button>}
      </div>
        </>
    )
}

export default ShoppingCart
