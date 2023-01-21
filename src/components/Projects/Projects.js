import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/rodan1.jpg";
import chatify from "../../Assets/jdstore1.jpg";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import bitsOfCode from "../../Assets/espn1.jpg";
// import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={chatify}
              isBlog={false}
              title="JDs Store"
              description="JD's Store is an online Ecommerece store for fashion brands like clothing, wearbles, Footwears "
              ghLink="https://github.com/sharukh230/JDs-Shop"
              demoLink="https://jds-store.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ESPN CricInfo"
              description="EspnCricInfo is a sports news website exclusively for the game of cricket. It contains various news, columns, blogs, videos and fantasy sports games. Among its most popular feature are its liveblogs of cricket matches, which includes a bevy of scorecard options, allowing readers to track such aspects of the game as wagon wheels and partnership breakdowns."
              ghLink="https://github.com/sbj1198/espn_cricinfo"
              demoLink="https://espncric-info.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Rodan+Field Clone"
              description="Rodan + Fields is a leading skincare brand founded in 2000 by Stanford-trained Dermatologists Dr. Katie Rodan and Dr. Kathy Fields with a passion for giving people the best skin of their lives — and the confidence that comes with it. Rodan + Fields skincare philosophy is based on Multi-Med Therapy: The right ingredients in the right formulations in the right order deliver visible results. With its product efficacy and disruptive business model, Rodan + Fields is life-changing skincare."
              ghLink="https://github.com/sharukh230/prickly-expert-9128"
              demoLink="https://jovial-biscochitos-b40ea6.netlify.app/"              
            />
          </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Projects;
