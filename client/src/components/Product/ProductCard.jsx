import "./productcard.scss";
import StarIcon from '@mui/icons-material/Star';
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from 'react-router-dom';

export const ProductCard = ({product})=>{
  
    return (<>
            <div className="card-wrapper">
            <Link to ={`/aboutproduct/${product._id}`}>
                <div className="prod-img">
                    <img  src={product.thumbnail}/>
                    <div className="moreItems">+2 More</div>
                </div>
                <div className="prod-info">
                    <p className="prod-name">{product.productName}</p>
                    <div className="prize"><span className="curr-prize" >₹{product.price}</span> <del className="old-prize"> ₹{product.oldPrice}</del><span className="discount">{product.offer}</span></div>
                    <div className="first-order"><CancelIcon className="cancelicon"/><span>₹ 100 off on 1st Order</span></div>
                    <div ><span className="delivery"> Free Delivery </span> </div>
                    <div className="feedback">
                        <span className="ratting">{product.rating}<StarIcon className="star" /> </span> <span>6 Reviews</span>
                    </div>
                </div>
            </Link>
            </div>
    </>)
}