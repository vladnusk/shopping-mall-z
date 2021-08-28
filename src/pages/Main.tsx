import { useState, useEffect } from 'react'
import ProductsGrid from "../components/ProductsGrid"
import { IProduct } from '../models/IProduct'
import fakeProducts from '../fakeApi/rawData'
import { useAppSelector } from '../store/hooks';
import { selectFavorites } from '../store/slices/favorites/favoritesSlice';
const Main: React.FC = () => {
    const favoriteProducts = useAppSelector(selectFavorites);

    const [products, setProducts] = useState<IProduct[]>(fakeProducts())

  const allProducts = products.map(item => ({productId: item.productId, name: item.name, image:item.image, isFavorite: !!favoriteProducts.find((favItem => favItem.productId === item.productId))}))

    return (
        <>
            <ProductsGrid productsList={allProducts} />
        </>
    )
}



export default Main