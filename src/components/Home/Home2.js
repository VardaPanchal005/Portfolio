import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple">Java, Python and JavaScript</b>
              </i>
              <br />
              <br />
              My field of Interest's are building expertise in&nbsp;
              <i>
                <b className="purple">Cloud Infrastructure and DevOps</b>,{" "}
                <b className="purple">Backend Systems and API Design</b>,
                along with strengthening my problem-solving skills through{" "}
                <b className="purple">
                  Data Structures and Algorithms.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with latest technologies and and strive to create innovative solutions that address real-world challenges and enhance user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LETS CONNECT!</h1>
            <p>
              <span className="purple">Feel free to connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/VardaPanchal005"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/varda-panchal-912431258/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
