import { useContext, useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './aboutProduct.scss';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import axios from "axios";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Button, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { nanoid } from 'nanoid';
import { addProduct } from '../../redux/cart/action';
import { AuthContext } from '../../context/AuthContext';
export const AboutProduct = (props)=>{
    const {auth} = useContext(AuthContext)
    const history = useHistory()
    const {id} = useParams();
     //console.log(id)
 
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [product,setProduct] = useState({});
    const [size,setSize] = useState("")
    useEffect(()=>{
        setLoading(true);
        axios.get(`/products/${id}`)
        .then(res=>{
            
            setLoading(false);
            setError(false); 
            console.log(res.data)
             setProduct(res.data.product);

        })
        .catch(err=>{
            setLoading(false)
            setError(true);
            
        })

    },[]);

    const dispatch = useDispatch();

    const handleClick = ()=>{
        let item={
            id:nanoid(4),
            quantity:1,
            selectedSize:size,
            product
        }

        if(!auth) history.push("/login");
        
        const action = addProduct(item);
        dispatch(action);
        history.push('/checkout/cart');
    }
    return (
        <>
            <Header />
            {
                loading?"loading..":error?"somthing went wrong":
            <div id="product-details-container">
                 <div className="details-wrapper">
                     <div className="left">
                        <div className="select-images"></div>
                        <div className="show-image">
                            <div className="image-container">
                            <img src={product.thumbnail} alt={product.productName} border="0" />
                
                            </div>
                            <div className="button-conatiner">
                                <Button variant='contained' onClick={handleClick} style={{backgroundColor:"rgb(244, 51, 151)", width:"100%", marginTop:"20px"}}> <ShoppingCartOutlinedIcon /> Add To Cart</Button>
                            </div>
                        </div>
                     </div>
                     <div className="right">
                         <div className="product-headline">
                            
                                 <div className="prod-title">{product.productName}</div>
                                 <div className="prod-price">
                                     <div className="current-prize">₹{product.price}</div>
                                     <div className="old-prize"><del>₹{product.oldPrice}</del></div>
                                     <div className="price-off">{product.offer}</div>
                                 </div>
                                 <div className='rating'>
                                     <div className="star"> <span>{product.rating}</span> <StarOutlinedIcon style={{fontSize:"16px"}}/></div>
                                     <span className="rate">6 Ratings</span>
                                 </div>


                                 <div className="prod-offer">
                                        <div><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" height="16" width="16" color="greenT2" iconsize="20" className="Icon-sc-1iwi4w1-0 jabcjO"><path fillRule="evenodd" clipRule="evenodd" d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z" fill="#06A759"></path></svg>₹42 discount on 1st order</div>
                                 </div>
                                 <div className="prod-delivery">
                                     <span>Free Delivery</span>
                                 </div>
                           
                         </div>
                         <div className="size-container">
                             <Typography variant='h6'>Select Size</Typography>
                             <div className="prod-sizes">

                                 {
                                     product.sizes?.map(itemSize=>
                                        <div className={size==itemSize?"selected-size":"size"} onClick={()=>setSize(`${itemSize}`)}>
                                        <span>{itemSize}</span>
                                        
                                     </div>
                                        )
                                 }
                                 
                             </div>
                         </div>
                         {/* <div className="prod-details">
                                <Typography variant='h5'>Product Details</Typography>
                                
                         </div> */}
                     </div>
                 </div>
            </div>
            }
            <Footer />
        </>
    )
}