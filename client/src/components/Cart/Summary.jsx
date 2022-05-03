import { useSelector } from "react-redux";
import { Typography, Button, Card, CardHeader } from "@mui/material";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Address } from "./Adress";
import "./summary.scss"
export const Summary = ({ address }) => {
   // console.log(address)
    const cartItems = useSelector(state => state.products);
    //console.log(cartItems)
    return (
        <>
            <div className="summary-container">
                <Typography variant="h6">Product Details</Typography>
                <div className="summ-items" style={{marginTop:"15px"}}>
                    <div style={{ color: "grey", display: "flex", gap: "15px", alignItems: "center", border: "1px solid grey", boxSizing: "border-box", padding: "5px" }}>

                        <LocalShippingOutlinedIcon /> <b>Estimated Delivery by Saturday, 07th May</b>

                    </div>
                    {
                        cartItems?.map(item => <div className="item-card" style={{ marginTop: "0px", boxSizing: "border-box", border: "1px solid grey", padding: "10px", borderRadius: "2px" }}>
                            <div className="item-info" style={{ display: "flex", gap: "10px" }} >
                                <div className="img-container-cart" style={{ width: "100px", height: "100px" }}>
                                    <img src={item.product.thumbnail} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="" />
                                </div>
                                <div className="cart-item-details">
                                   
                                    <Typography variant="h6">{item.product.productName}</Typography>
                                    <p>Size: {item.selectedSize} &nbsp; &nbsp; &nbsp; Qty: {item.quantity}</p>
                                    <p>₹ {item.product.price * item.quantity}</p>

                                </div>
                                <div className="edit-button">
                                    <Button variant="outline" style={{ color: "hotpink" }}>edit</Button>
                                </div>
                            </div>





                        </div>)
                    }
                </div>

                    <br />
                <Typography variant="h6">Delivery Address</Typography>
                <div className="delv-address" style={{ marginTop:"15px", boxSizing:"border-box", padding:"10px", border:"1px solid grey", borderRadius:"5px"}} >
                    <div className="add-top" style={{display:"flex",justifyContent:"space-between"}}>
                        <Typography variant="h6">{address.name}</Typography>
                        <Button variant="outline">Edit</Button>
                    </div>
                    <p>{address.address}</p>

                </div>

                <br />
                <Typography variant="h6">Payment Mode</Typography>
                <div className="select-paymentway" style={{backgroundColor:"lightblue", display:"flex", justifyContent:"space-between", padding:"10px", borderRadius:"5px", marginTop:"20px"}}>
                                            <div style={{display:"flex", alignItems:"center"}}>

                                            <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" iconSize="20" className="Icon-sc-1iwi4w1-0 fnLXhG"><path d="M24.029 9.01v6.277L28 13.782 22.869.93a1 1 0 00-1.3-.558L0 9.011" fill="#56BB8A"></path><path d="M0 8.82h27a1 1 0 011 1v13.512a1 1 0 01-1 1H1a1 1 0 01-1-1V8.82z" fill="#56BB8A"></path><path d="M1.559 14.358c1.656-.35 2.952-1.265 3.447-2.435H23c.495 1.17 1.791 2.085 3.448 2.435v4.437c-1.657.35-2.953 1.265-3.448 2.435H5.006c-.496-1.17-1.791-2.085-3.447-2.435v-4.437z" fill="#91E5BD"></path><path d="M13.751 19.28c1.58 0 2.86-1.277 2.86-2.852a2.857 2.857 0 00-2.86-2.853 2.857 2.857 0 00-2.86 2.853 2.857 2.857 0 002.86 2.852z" fill="#56BB8A"></path><path d="M23.635 9.01L22.28 5.53l-.062-.153a4.018 4.018 0 01-3.5-1.501l-.154.062L6.296 9.01h17.34z" fill="#91E5BD"></path><path d="M7.28 16.998a.571.571 0 100-1.142.571.571 0 000 1.143zM19.865 16.998a.571.571 0 10.002-1.142.571.571 0 00-.002 1.143z" fill="#56BB8A"></path></svg>
                                            &nbsp;&nbsp;<span>Cash on Delivery</span>
                                            </div>
                                           
                                        </div>
            </div>
        </>
    )
}