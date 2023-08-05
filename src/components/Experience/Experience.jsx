import React from 'react'
import Particle from "../Particle";
import { Container } from 'react-bootstrap';
import '../Experience/style.css';
const Experience = () => {
  return (
    <Container fluid className='experience-section'>
    <Particle />
        <div className="timeline">
            <div className="econtainer eright-container">
                <img src="girlscript.png" />
                <div className="text-box">
                    <h2>Open Source Contributor</h2>
                    <h5>GirlScript Summer Of Code</h5>
                    <font color="gray"><small><b>May 2023-August 2023</b></small></font>
                    <p align="left">Participating in GirlScript Summer of Code as an open-source contributor was an enriching journey, allowing me to collaborate talented community while honing my coding skills and making a meaningful impact on real-world projects.</p>
                    <span className="right-container-arrow" ></span>        
                </div>
            </div>

            <div className="econtainer eleft-container">
                <img src="social.png"/>
                <div className="text-box">
                    <h2>Open Source Contributor</h2>
                    <h5>Social Summer Of Code</h5>
                    <font color="gray"><small><b>June 2023-July 2023</b></small></font>
                    <p align="left">As an open-source contributor participating in the Social Summer of Code, I had the incredible experience of collaborating with a diverse and passionate people, making meaningful contributions to projects
</p>
                    <span className="left-container-arrow" ></span>
                </div>
            </div>

            <div className="econtainer eright-container">
                <img src="infolabz.png" alt=""/>
                <div className="text-box">
                    <h2>Django Developer</h2>
                    <h5>Infolabz</h5>
                    <font color="gray"><small><b>July 2023-August 2023</b></small></font>
                    <p align="left">As a Django developer at Infolabz, I had the opportunity to build dynamic web applications, tackling challenging tasks, and constantly learning from experienced colleagues, making my experience both rewarding and professionally enriching</p>
                    <span className="right-container-arrow" ></span>
                </div>
            </div>
        </div>
</Container>
  )
}

export default Experience