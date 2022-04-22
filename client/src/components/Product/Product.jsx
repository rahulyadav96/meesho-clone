import './product.scss';
import { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';
import axios from 'axios';

export const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get('/products')
        .then(res=>{
            setLoading(false);
            setError(false);
            setProducts(res.data)
        })
        .catch(err=>{
            setLoading(false)
            setError(true)
        })
    })
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