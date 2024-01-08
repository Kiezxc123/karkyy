import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiAngularSimple,
  DiJavascript1,
 
  DiNodejs,

} from "react-icons/di";
import {
 
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
    </Row>
  );
}

export default Techstack;
