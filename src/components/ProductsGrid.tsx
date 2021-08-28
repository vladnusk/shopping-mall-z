import Product from './Product'
import { IProduct } from '../models/IProduct'


const ProductsGrid: React.FC<{ productsList: IProduct[] }> = ({ productsList }) => {
 
    return (
        <div className="products-grid">

            {productsList.map((item: IProduct) => {
                return (
                    <Product
                        key={item.productId}
                        productId={item.productId}
                        name={item.name}
                        image={item.image}
                        isFavorite={item.isFavorite? true: false} />
                )
            })}

        </div>
    )
}

export default ProductsGrid