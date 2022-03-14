import "./productcard.scss";
import StarIcon from '@mui/icons-material/Star';
import CancelIcon from '@mui/icons-material/Cancel';
export const ProductCard = ()=>{
    return (<>
            <div className="card-wrapper">
                <div className="prod-img">
                    <img  src="https://images.meesho.com/images/products/66590437/uowch_512.jpg"/>
                    <div className="moreItems">+2 More</div>
                </div>
                <div className="prod-info">
                    <p className="prod-name">Preety Party wear</p>
                    <div className="prize"><span className="curr-prize" >₹483</span> <del className="old-prize"> ₹583</del><span className="discount">21% off</span></div>
                    <div className="first-order"><CancelIcon className="cancelicon"/><span>₹ 100 off on 1st Order</span></div>
                    <div ><span className="delivery"> Free Delivery </span> </div>
                    <div className="feedback">
                        <span className="ratting">3.3<StarIcon className="star" /> </span> <span>6 Reviews</span>
                    </div>
                </div>
            </div>
    </>)
}