import ProductsGrid from "../components/ProductsGrid"
import { useAppSelector } from '../store/hooks';
import { selectFavorites } from '../store/slices/favorites/favoritesSlice';
import { useGetProductsQuery } from '../store/slices/productsApi/productsApi';
import { selectProductFilters } from '../store/slices/filterProducts/filterProducts'

const Main: React.FC = () => {
    const favoriteProducts = useAppSelector(selectFavorites);
    const productFilters = useAppSelector(selectProductFilters)
    const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery(null);
 
    if (isError) return <div>An error has occurred!{error}</div>
    if (isLoading) return <div className="content-loading">Products are loading...</div>
    if (data) {
        let serializedData = data.map(item => ({
            ...item,
            isFavorite: !!favoriteProducts.find((favItem => favItem.productId === item.productId))
        }))
        if (productFilters.query) {
            serializedData = serializedData.filter(item => {
                const regex = new RegExp(`^${productFilters.query}`, `gi`)
               return item.name.match(regex) 
            })
        }
        return <ProductsGrid productsList={serializedData} />
    }
      
    return null;
}

export default Main