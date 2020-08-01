import React from "react";
import { Row, Col } from "antd";
import "../styles/navigation.scss";
import logo from "../assets/images/logo.svg";

function Navigation() {
  
  return (
    <div className='navigation'>
      <Row>
        <Col md={4}>
          <a href="/" className="logo"><img src={logo}/></a>
        </Col>   
        <Col xs={0} md={10}>
          <ul>
            <li><a href="#">Features</a></li>   
            <li><a href="#">Pricing</a></li>   
            <li><a href="#">Resources</a></li>    
          </ul> 
        </Col>
        <Col xs={0} md={10} className="links">
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#" className="sign-up">Sign Up</a></li>
          </ul>
        </Col> 
      </Row>   
    </div>
  );
}

export default Navigation;
