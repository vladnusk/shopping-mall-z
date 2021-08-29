import ProductsGrid from '../components/ProductsGrid'
import { useAppSelector } from '../store/hooks';
import { selectFavorites } from '../store/slices/favorites/favoritesSlice';
import { useGetProductsQuery } from '../store/slices/productsApi/productsApi';
import { selectProductFilters } from '../store/slices/filterProducts/filterProducts'
const FavoriteItems = () => {
const productFilters = useAppSelector(selectProductFilters)
let products = useAppSelector(selectFavorites);
if (productFilters.query) {
    products = products.filter(item => {
        const regex = new RegExp(`^${productFilters.query}`, `gi`)
       return item.name.match(regex) 
    })
}

    return (
        <>
            <ProductsGrid productsList={products} />
        </>
    )
    }
export default FavoriteItems
