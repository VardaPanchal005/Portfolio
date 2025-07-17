import React, { useEffect, useRef, useState } from 'react';
import Particle from "../Particle";
import { Container } from 'react-bootstrap';
import '../Experience/style.css'; 

const Experience = () => {
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const maxItems = 7; 

  useEffect(() => {
    const revealInterval = setInterval(() => {
      setVisibleItems(prevVisible => {
        if (prevVisible.length >= maxItems) {
          clearInterval(revealInterval);
          return prevVisible;
        }
        return [...prevVisible, prevVisible.length];
      });
    }, 1800); 

    return () => clearInterval(revealInterval);
  }, []);

  const timelineProgress = (visibleItems.length / maxItems) * 100;

  return (
    <Container fluid className='experience-section'>
      <Particle />
      <div className="timeline" ref={timelineRef} style={{ '--progress': `${timelineProgress}%` }}>

        <div className={`econtainer eright-container ${visibleItems.includes(0) ? 'visible' : ''}`} style={{ '--y-offset': '10px' }}>
          <img src="girlscript.png" alt="GirlScript logo" />
          <div className="text-box">
            <h2>Open Source Contributor</h2>
            <h5>GirlScript Summer Of Code</h5>
            <font color="gray"><small><b>May-Aug 2023</b></small></font>
            <p>Participated in a three-month coding program. Worked on real-world projects and gained practical development experience.</p>
          </div>
        </div>

        <div className={`econtainer eleft-container ${visibleItems.includes(1) ? 'visible' : ''}`} style={{ '--y-offset': '-50px' }}>
          <img src="social.png" alt="Social Summer logo" />
          <div className="text-box">
            <h2>Open Source Contributor</h2>
            <h5>Social Summer Of Code</h5>
            <font color="gray"><small><b>Jun-Jul 2023</b></small></font>
            <p>Contributed to open source projects in a collaborative environment. Fixed bugs and implemented new features in various repositories.</p>
          </div>
        </div>

        <div className={`econtainer eright-container ${visibleItems.includes(2) ? 'visible' : ''}`} style={{ '--y-offset': '10px' }}>
          <img src="infolabz.png" alt="Infolabz logo" />
          <div className="text-box">
            <h2>Django Developer</h2>
            <h5>Infolabz</h5>
            <font color="gray"><small><b>Jul-Aug 2023</b></small></font>
            <p>Created dynamic web applications using Django framework. Implemented database models, views, and template systems for various client projects.</p>
          </div>
        </div>

        <div className={`econtainer eleft-container ${visibleItems.includes(3) ? 'visible' : ''}`} style={{ '--y-offset': '-50px' }}>
          <img src="Microsoft.png" alt="Microsoft logo" />
          <div className="text-box">
            <h2>Microsoft Student Ambassador</h2>
            <h5>Microsoft</h5>
            <font color="gray"><small><b>Nov 2023-Apr 2024</b></small></font>
            <p>Organized technical workshops and events on campus. Promoted Microsoft technologies and developer tools to fellow students.</p>
          </div>
        </div>

        <div className={`econtainer eright-container ${visibleItems.includes(4) ? 'visible' : ''}`} style={{ '--y-offset': '10px' }}>
          <img src="ignition.png" alt="Ignition logo" />
          <div className="text-box">
            <h2>Backend Developer</h2>
            <h5>Ignition Nest Labs</h5>
            <font color="gray"><small><b>Dec 2023-Apr 2024</b></small></font>
            <p>Developed backend infrastructure for an early-stage startup. Created APIs, database models, and authentication systems.</p>
          </div>
        </div>

        <div className={`econtainer eleft-container ${visibleItems.includes(5) ? 'visible' : ''}`} style={{ '--y-offset': '-50px' }}>
          <img src="sahayata.jpg" alt="Sahayata logo" />
          <div className="text-box">
            <h2>Full Stack Developer</h2>
            <h5>Sahayata24X7</h5>
            <font color="gray"><small><b>Apr-Jun 2024</b></small></font>
            <p>Built responsive applications using React for frontend and Django REST framework for backend. Implemented user authentication and data visualization.</p>
          </div>
        </div>

        <div className={`econtainer eright-container ${visibleItems.includes(6) ? 'visible' : ''}`} style={{ '--y-offset': '10px' }}>
          <img src="quickwork.png" alt="Quickwork logo" />
          <div className="text-box">
            <h2>Associate Software Engineer</h2>
            <h5>Quickwork</h5>
            <font color="gray"><small><b>Aug 2024</b></small></font>
            <p>Developing automation solutions and MERN stack applications with AWS integration. Working on enterprise-level projects.</p>
          </div>
        </div>

      </div>
    </Container>
  );
}

export default Experience;
