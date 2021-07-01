import React from 'react';
import '../css/Home.css';
import Card from "../Components/Card/Card";
import Product from"../Components/Card/Product";
import img1 from "../Images/woman1.png";
import img2 from "../Images/woman2.png";
import img3 from "../Images/woman3.png";
import img4 from "../Images/bag1.png";
import img5 from "../Images/kids1.png";
import img6 from "../Images/product1.png";
import img7 from "../Images/product2.png";
import img8 from "../Images/product3.png";
import img9 from "../Images/product4.png";
import img10 from "../Images/product5.png";
import img11 from "../Images/product6.png";
import img12 from "../Images/product7.png";
import img13 from "../Images/product8.png";

const Home = () => {
    return (
        <>
            <div className="header">
            </div>
           
            <div className="home-sec2">
                <div className = "">
                <Card
                    imgsrc={img1}
                    category="OUTWEAR"
                    title="NEW"
                    info="COLLECTION"
                    link=""
                />
                <Card
                    imgsrc={img2}
                    category="SUMMNER"
                    title="HOT"
                    info="COLLECTION"
                    link=""
                />
                </div>
                <div className = "">
                
                <Card
                    imgsrc={img4}
                    category="10% OFFER"
                    title=""
                    info="NO SELECTED MODELS"
                    link=""
                />
                </div>
                <div className = "">
                
                <Card
                    imgsrc={img3}
                    category="ARRIVAL"
                    title="NEW"
                    info=""
                    link=""
                />
                <Card
                    imgsrc={img5}
                    category="OFFER"
                    title="HOT"
                    info=""
                    link=""
                />
                </div>
                
            </div>

            <div className="home-sec3">
                <div className="home-sec3-header">
                    <h2>HOT PRODUCT</h2>
                    <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
                    <ul className="home-sec3-ul">
                        <li><a href="">NEW ARRIVAL</a></li>
                        <li><a href="">TRENDING</a></li>
                        <li><a href="">BEST SELLERS</a></li>
                        <li><a href="">FEATURED</a></li>
                        <li><a href="">ON SALL</a></li>
                    </ul>
                </div>
                
                <div className = "home-sec3-product">
                    <Product
                    imgsrc1={img6}
                    span="NEW"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img7}
                    span="HOT"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img8}
                    span="NEW"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img9}
                    span="HOT"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img10}
                    span="NEW"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img11}
                    span="HOT"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img12}
                    span="NEW"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    <Product
                    imgsrc1={img13}
                    span="HOT"
                    title="Blue Dress For Woman"
                    rupee="$38.50"
                    />
                    
                </div>
            </div>



        </>
    )
}

export default Home
