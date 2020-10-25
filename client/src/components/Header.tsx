import React from "react";
import { Row, Col } from "antd";
import "../styles/header.scss";
import img from "../assets/images/illustration-working.svg";

function Header() {
  return (
    <header className='header'>
      <Row>
        <Col xs={24} lg={12}>
          <h1 className="title">More than just shorter links</h1>
          <p className="sub-text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="get-started">Get Started</button>
        </Col>
        <Col xs={12} lg={12}>
          <img src={img} className='working img-fluid' alt='skills' />
        </Col>
      </Row>
    </header>
  );
}

export default Header;
