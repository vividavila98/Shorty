import React from "react";
import { Row, Col } from 'antd';
import "../styles/footer.scss";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";


function Footer() {
  return (
    <footer>
        <Row>
          <Col xs={24} md={6}><h3>Shortly</h3></Col>
          <Col xs={24} md={4}>
            <h4>Features</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </Col>
          <Col xs={24} md={4}>
            <h4>Resources</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
           </ul>
          </Col>
          <Col xs={24} md={4}>
          <h4>Company</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
          </Col>
          <Col xs={24} md={6} className="icons">
          <a href="#"><img src={facebook}/></a>
          <a href="#"><img src={twitter}/></a>
          <a href="#"><img src={pinterest}/></a>
          <a href="#"><img src={instagram}/></a>
          </Col>
        </Row>
    </footer>
  );
}

export default Footer;
