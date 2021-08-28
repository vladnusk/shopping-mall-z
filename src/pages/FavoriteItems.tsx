import ProductsGrid from '../components/ProductsGrid'
import { useAppSelector } from '../store/hooks';
import { selectFavorites } from '../store/slices/favorites/favoritesSlice';
const FavoriteItems = () => {
  
const products = useAppSelector(selectFavorites);

    return (
        <>
            <ProductsGrid productsList={products} />
        </>
    )
    }
export default FavoriteItems
