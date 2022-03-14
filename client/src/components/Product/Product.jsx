import './product.scss';
import {useState} from 'react'
import { ProductCard } from './ProductCard';
export const Product = ()=>{
    const [products,setProducts] = useState(["procut1","prod2","prodct3"]);

    return (
        <div id="products">
            <div className="product-list">
                <h4>Products for you</h4>
                <div className="products-container">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

        </div>
    )
}