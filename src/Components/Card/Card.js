import React from 'react'
import "./Card.css";

function Card(props) {
    return (
        <div>

            <div className="home-sec2-cards">
            <div className="home-sec2-cards-information">
                    <h4 className="card-category">{props.category}</h4>
                    <h2 className="card-title">{props.title}</h2>
                    <h4 className="card-info">{props.info}</h4>
                    <a href="" target="_blank">
                        <button className="card-button">SHOP NOW</button>
                    </a>
                </div>
                <div className="home-sec2-cards-img">
                    <img src={props.imgsrc} alt="my pic" />
                </div>
                {/* <div className="home-sec2-cards-information">
                    <h4 className="card-category">{props.category}</h4>
                    <h2 className="card-title">{props.title}</h2>
                    <h4 className="card-info">{props.info}</h4>
                    <a href="" target="_blank">
                        <button className="card-button">SHOP NOW</button>
                    </a>
                </div> */}

            </div>



        </div>
    )
}

export default Card

