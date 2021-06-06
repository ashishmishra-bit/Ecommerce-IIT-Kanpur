import React from 'react'
import '../css/About.css';
import AboutHeader from '../Images/about.jpg'
import Team1 from '../Images/team1.png';
import Team2 from '../Images/team2.png';

const About = () => {
    return (
        <>
            <img className = "about_header" src = {AboutHeader} />

            {/* {Functionality Meet perfection} */}

            <div className = "about_section">
                <div className = "inner-width">
                    <h1>Functionality meets perfection</h1>
                    <div className = "border"></div>
                    <div className = "about-section-row">
                        <div className = "about-section-col">
                            <div className = "about">
                                <p>
                                In today’s day and age, one cannot underestimate the importance of design, the art of creating striking visuals to move and captivate your audience. And as the world becomes more and more digitized with each passing second, the importance of graphic design has been rocketed to the top.
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className = "about-section-col">
                            <div className="skills">
                                <div className = "skill">
                                    <div className = "title">UI / UX</div>
                                    <div className="progress">
                                        <div className = "progress-bar p1"><span>75%</span></div>
                                    </div>
                                </div>

                                <div className = "skill">
                                    <div className = "title">Ideas</div>
                                    <div className="progress">
                                        <div className = "progress-bar p2"><span>80%</span></div>
                                    </div>
                                </div>

                                <div className = "skill">
                                    <div className = "title">Design</div>
                                    <div className="progress">
                                        <div className = "progress-bar p3"><span>95%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            {/* Cards */}

            <div className = "card-container">
                <div className = "box">
                    <div className = "icon"><i className="fas fa-palette" /></div>
                    <div className = "content">
                        <h3>Creative Always</h3>
                        <p>Stay creative with Billey and the huge collection of premade elements, layouts & effects.</p>
                    </div>
                </div>

                <div className = "box">
                    <div className = "icon"><i className="fas fa-palette" /></div>
                    <div className = "content">
                        <h3>Creative Always</h3>
                        <p>Stay creative with Billey and the huge collection of premade elements, layouts & effects.</p>
                    </div>
                </div>

                <div className = "box">
                    <div className = "icon"><i className="fas fa-palette" /></div>
                    <div className = "content">
                        <h3>Creative Always</h3>
                        <p>Stay creative with Billey and the huge collection of premade elements, layouts & effects.</p>
                    </div>
                </div>

                <div className = "box">
                    <div className = "icon"><i className="fas fa-palette" /></div>
                    <div className = "content">
                        <h3>Creative Always</h3>
                        <p>Stay creative with Billey and the huge collection of premade elements, layouts & effects.</p>
                    </div>
                </div>
            </div>


            {/* Teams */}
        <div className="Team-Heading">
            <h2>EXPERT TEAM</h2>
            <div className = "Teams-container">
              
                <div className = "main-card">
                    <div className = "Team-cards">
                        <div className = "Team-card">
                            <div className = "Team-content">
                                <div className="Team-img">
                                    <img src = {Team1} />
                                </div>
                                <div className = "Team-details">
                                    <div className = "Team-name">Ashish Mishra</div>
                                    <div className = "Team-job">Web developer</div>
                                </div>
                                <div className = "Team-socials">
                                    <a href = "#"><i className="fab fa-facebook-f"></i></a>
                                    <a href = "#"><i className="fab fa-twitter"></i></a>
                                    <a href = "#"><i className="fab fa-instagram"></i></a>
                                    <a href = "#"><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className = "Team-card">
                            <div className = "Team-content">
                                <div className="Team-img">
                                    <img src = {Team2} />
                                </div>
                                <div className = "Team-details">
                                    <div className = "Team-name">Ashish Mishra</div>
                                    <div className = "Team-job">Web developer</div>
                                </div>
                                <div className = "Team-socials">
                                    <a href = "#"><i className="fab fa-facebook-f"></i></a>
                                    <a href = "#"><i className="fab fa-twitter"></i></a>
                                    <a href = "#"><i className="fab fa-instagram"></i></a>
                                    <a href = "#"><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className = "Team-card">
                            <div className = "Team-content">
                                <div className="Team-img">
                                    <img src = {Team1} />
                                </div>
                                <div className = "Team-details">
                                    <div className = "Team-name">Ashish Mishra</div>
                                    <div className = "Team-job">Web developer</div>
                                </div>
                                <div className = "Team-socials">
                                    <a href = "#"><i className="fab fa-facebook-f"></i></a>
                                    <a href = "#"><i className="fab fa-twitter"></i></a>
                                    <a href = "#"><i className="fab fa-instagram"></i></a>
                                    <a href = "#"><i className="fab fa-whatsapp"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
            </div>


        </> 
    )
}

export default About;
