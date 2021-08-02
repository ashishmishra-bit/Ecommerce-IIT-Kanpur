import React from 'react'
import "./Product.css";

function Product(props) {
    return (
        <div>
            <div className="home-sec3-cards">
                <div className="home-sec3-cards-img">
                <span className="home-sec3-span">{props.span}</span>
                    <img src={props.imgsrc1} alt="my pic" />
                    {/* <img src={props.imgsrc2} alt="my pic" /> */}
                   
                    <div className="home-sec3-sidediv">
                        <div className="home-sec3-sidediv1"></div>
                        <div className="home-sec3-sidediv2"></div>
                        <div className="home-sec3-sidediv3"></div>
                    </div>
                </div>
                
                <div className="home-sec3-cards-info">
                    <p className="home-sec3-card-title">{props.title}</p>
                    <p className="home-sec3-card-rupee">{props.rupee}</p>
                    <a href="" target="_blank">
                        <button className="home-sec3-button">ADD TO CART</button>
                    </a>
                </div>

            </div>
            
        </div>
    )
}

export default Product
