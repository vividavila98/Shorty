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
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
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
          <button className="social">facebook<img src={facebook} alt="facebook"/></button>
          <button className="social">twitter<img src={twitter} alt="twitter"/></button>
          <button className="social">pinterest<img src={pinterest} alt="pinterest"/></button>
          <button className="social">instagram<img src={instagram} alt="instagram"/></button>
          </Col>
        </Row>
    </footer>
  );
}

export default Footer;
