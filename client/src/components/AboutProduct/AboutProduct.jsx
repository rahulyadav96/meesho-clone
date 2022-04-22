import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './aboutProduct.scss';
import axios from "axios"
export const AboutProduct = ({prodId})=>{
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [product,setProduct] = useState({});
    useEffect(()=>{
        setLoading(true);
        axios.get(`/products/${prodId}`)
        .then(res=>{
            
            setLoading(false);
            setError(false); 
            setProduct(res.data);

        })
        .catch(err=>{
            setLoading(false)
            setError(true);
            
        })

    },[])
    return (
        <>
            <Header />
            <div>
                 
            </div>
            <Footer />
        </>
    )
}