import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Sharukh Shaikh </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />I am a Full Stack Web Developer specialized in MERN Stack.
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
            Hello! I'm <span className="purple">Sharukh Shaikh </span> a Software developer. 
            I am experienced in taking fullstack applications from scratch to production.
            Over the last one year, I've had the opportunity to develop for a handful of awesome projects/assignments and continue to do so today. 
            My work includes developing making web apps, creating backend servers, and implementing desktop apps.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Podcast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sharukh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
