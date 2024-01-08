import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import sccpg from "../assets/projects/scc.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          This is<strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are Simple Project I still more Project but I forgot to add in my drive...
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sccpg}
              isBlog={false}
              title="Simple Project I Made"
              description="Saint Columban Collage."
              ghLink="https://github.com/Kiezxc123/mark"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects