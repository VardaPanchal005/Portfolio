import React, { useEffect, useRef } from 'react';
import Particle from "../Particle";
import { Container } from 'react-bootstrap';
import '../Experience/style.css';

const Experience = () => {
    const timelineRef = useRef(null);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (timelineRef.current) {
          const nextCard = timelineRef.current.querySelector('.econtainer:not(.hidden)');
          if (nextCard) {
            nextCard.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
            nextCard.classList.add('hidden');
          }
        }
      }, 2300);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <Container fluid className='experience-section'>
      <Particle />
      <div className="timeline" ref={timelineRef}>
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
            <p align="left">As an open-source contributor participating in the Social Summer of Code, I had the incredible experience of collaborating with a diverse and passionate people, making meaningful contributions to projects.</p>
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

        <div className="econtainer eleft-container">
          <img src="Microsoft.png" alt="" width="100" height="53" />
          <div className="text-box">
            <h2>Microsoft Student Ambassador</h2>
            <h5>Microsoft</h5>
            <font color="gray"><small><b>November 2023</b></small></font>
            <p align="left">As a MLSA, I connect my peers to the diverse resources offered by Microsoft products. Through campus event, I aim to motivate fellow students to explore innovative learning opportunities. My role is to foster a collaborative community and promote the use of Microsoft tools in education.</p>
            <span className="left-container-arrow" ></span> 
          </div>
        </div>

        <div className="econtainer eright-container">
          <img src="ignition.png" alt=""/>
          <div className="text-box">
            <h2>Backend Developer</h2>
            <h5>Ignition Nest Labs</h5>
            <font color="gray"><small><b>December 2023</b></small></font>
            <p align="left"> I work on the backend of web applications for startups, handling server-side tasks, collaborating with teams, and adapting to the dynamic startup environment. It's a valuable experience, providing practical insights into the world of emerging businesses.</p>
            <span className="right-container-arrow" ></span> 
          </div>
        </div>
      </div>   
    </Container>
  );
}

export default Experience;
