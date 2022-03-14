import './banner.scss';

export const Banner = ()=>{
    return (
        <>
            <div id = "banner">
                <div className="banner-wrapper">
                    <div className="leftBanner">
                        <h1>Lowest Prices Best Quality Shopping</h1>
                        <div>
                            <p>50 lakh+ Style | 650+ categories</p>
                        </div>
                    </div>
                    <div className="rightBanner">
                        <img src="/img/banner.jpg" alt="banner" />
                    </div>
                </div>
            </div>
        </>
    )
}