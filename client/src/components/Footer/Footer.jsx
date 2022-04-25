import './footer.scss';

export const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className='footer-wrapper'>
                    <div className='info'>
                        <div className='about-meesho'>
                            <h2>Shop Non-stop on Meesho</h2>
                            <p>Trusted by more than 1 crore Indians <br /> Cash on  Delivery | Free Delivery</p>
                        </div>
                        <div>
                            <p>Careers</p>
                            <p>Become a supplier</p>
                            <p>Our Influencer Program</p>
                        </div>
                        <div>
                            <p>Legal and Policies</p>
                            <p>Meesho Tech blog</p>
                        </div>
                        <div>
                            <h4>Contact Us</h4>
                            <p>mrahul.yadav96@gmail.com</p>
                        </div>
                        <div>
                            <h4>Reach out to us</h4>
                            
                            <div className='social-media'>

                            <img src='https://meesho.com/assets/facebook.png' alt='facebook'/>
                            <img src='https://meesho.com/assets/instagram.png' alt='instagram'/>
                            <img src='https://meesho.com/assets/youtube.png' alt='youtube'/>
                            <img src='https://meesho.com/assets/linkedin.png' alt='linkedin'/>
                            <img src='https://meesho.com/assets/twitter.png' alt='twitter'/>
                            </div>
                        </div>

                    </div>
                    <div className='download-app'>
                        <img src='https://images.meesho.com/images/pow/playstore-icon-big.png' />
                        <img src='https://images.meesho.com/images/pow/appstore-icon-big.png' />
                    </div>
                </div>
            </div>
        </>
    )
}
