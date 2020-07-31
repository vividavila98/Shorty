import React from "react";
import { Row, Col, Button } from "antd";
import "../styles/header.scss";
import img from "../assets/images/illustration-working.svg";

function App() {
  return (
    <div className='App'>
      <div className="container">
        <Row>
          <Col xs={24} md={12}>
            <h1>More than just shorter links</h1>
            <p>
                Build your brand’s recognition and get detailed 
                insights on how your links are performing.
            </p>
            <a>Get Started</a>
          </Col>
          <Col xs={12} md={12}>
            <img src={img} className='skills img-fluid' alt='skills' />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
