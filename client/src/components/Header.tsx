import React from "react";
import { Row, Col } from "antd";
import "../styles/header.scss";
import img from "../assets/images/computer.png";

export default function Header() {
  return (
    <header className='header container'>
      <Row justify="space-between" align="middle"> 
        <Col xs={24} lg={12}>
          <h1 className="title">Send Shorter Links Instantly</h1>
          <p className="sub-text">
          Shortly allows you to shorten long URLs to links as little as 20 characters.
          </p>
          <button className="get-started">Get Started</button>
        </Col>
        <Col xs={0} lg={12} className="img-container">
          <img src={img} className='working img-fluid' alt='skills' />
        </Col>
      </Row>
    </header>
  );
}
