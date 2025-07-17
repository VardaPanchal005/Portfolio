import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTerraform,
  SiNginx,
  SiPostman,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiHelm
 
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiNginx/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiTerraform/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;
