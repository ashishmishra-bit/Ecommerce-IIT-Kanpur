import React from 'react'
import '../Footer/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import Logo from '../../Images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            {/* <h1>footer</h1> */}
            <div className="footer-div1">
                {/* <img src="pic.png"></img> */}
                <img className = "footer-logo-img" src={Logo} alt = "Logo"/>
                <p>Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Obcaecati culpa assumenda<br /> voluptas placeat amet consectetur adipisicing<br /> elit. Obcaecati culpa assumenda voluptas<br />placeat..</p>

                <div className="footer-div-icon">
                    <a href = "#"><FaFacebookF/></a>
                    <a href = "#"><FaTwitter/></a>
                    <a href = "#"><FaInstagram/></a>
                    <a href = "#"><FaLinkedin/></a>
                    <a href = "#"><FaGooglePlusG/></a>
                </div>
            </div>



            <div className="footer-div2">
                <p>INFORMATION</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Frequently Questions</li>
                    <li>Order Tracking</li>
                    <li>Compare</li>
                </ul>
            </div>
            <div className="footer-div3">
                <p>YOUR ACCOUNT</p>
                <ul>
                    <li>Cart View One</li>
                    <li>Cart View Two</li>
                    <li>Empty Cart</li>
                    <li>Checkout View One</li>
                    <li>Checkout View Two</li>
                    <li>Wishlist</li>
                </ul>
            </div>
            <div className="footer-div4">
                <p>NEWSLETTER</p>
                <input  classname="form-control"type="email" required placeholder="Your mail" name="EMAIL"></input><br/>
                <button className="footer-div4-button">SEND EMAIL</button>
            </div>
        </div>
    )
}

export default Footer
