import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Todo from "../../Assets/Projects/Todotask.png";
import travel from "../../Assets/Projects/travel.png";
import Craftwork from "../../Assets/Projects/Craftwork.png";
import Sorting from "../../Assets/Projects/Sorting Visualizer.png";
import Pathfinding from "../../Assets/Projects/Pathfinding.png";
import NebulaThread from "../../Assets/Projects/NebulaThread.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NebulaThread}
              isBlog={false}
              title="NebulaThread" 
              description="Built a full-stack SaaS platform using Next.js that enables users to create, schedule, and automate AI-powered web scraping workflows. The application features an intuitive UI for defining scraping rules, integrates serverless functions to handle dynamic data extraction, and leverages AI for content parsing and pattern recognition."
              ghLink="hhttps://github.com/VardaPanchal005/nextjsproject"
              demoLink="https://nebulathread.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo} 
              isBlog={false}
              title="QuickTick"
              description="This website is made to understand made to understand blockchain.You can add or delete task after connecting your wallet and authorize it with Metamask.Keep track of your daily schedules for a productive day"
              ghLink="https://github.com/VardaPanchal005/To-do"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel advisor"
              description="This app works on both Android and IOS plateforms.The purpose of this app is to find the best places(whether that be a tourist place or restaurant with affordable prices and other required details "
              ghLink="https://github.com/VardaPanchal005/Travel-Adviser"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Craftwork}
              isBlog={false}
              title="Craftwork"
              description="Craftwork is a full stack website.Whenever you make an account it will be stored in django admin with hashed password.If you add items to cart you will get payment dupe like credit card,Paypal and after that you will be redirected to Orders page."
              ghLink="https://github.com/VardaPanchal005/Craft-Work"
            
            />
          </Col>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pathfinding}
              isBlog={false}
              title="Pathfinding Visualizer"
              description="This website is made to understand Pathfinding algorithms.Whenever you select and any specific algo,you can add weights and walls(tutorial is available) and visualize the starting node will find the shortest path to the end node.There are various different mazes that you can try and play around with"
              ghLink="https://github.com/VardaPanchal005/Pathfinding-Visualizer"
              demoLink="https://vardapanchal005.github.io/Pathfinding-Visualizer/"
            
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sorting}
              isBlog={false}
              title="Sorting Visualizer"
              description="This website is made to understand sorting algorithms.Whenever you generate a new array,you can change the sorting speed and size and select any sorting algo and click generate.The array will be sorting from ascending to descending order in no time "
              ghLink="https://github.com/VardaPanchal005/Sorting-Visualizer"
              demoLink="https://vardapanchal005.github.io/Sorting-Visualizer/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
