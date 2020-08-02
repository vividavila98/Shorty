import React, {useState} from "react";
import { Row, Col, Drawer, Button } from "antd";
import "../styles/navigation.scss";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.png";

function Navigation() {
const [displayMenu, setDisplayMenu] = useState(false);
  
  return (
    <div className='navigation'>
      <Row>
        <Col xs={20} md={4}>
          <a href="/" className="logo"><img src={logo}/></a>
        </Col>  
        <Col xs={4} md={0}>
          <a onClick={() => setDisplayMenu(true)}><img className="menu-icon" src={menu}/></a>
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
      <Drawer
          className="menu"
          title="Basic Drawer"
          closable={false}
          onClose={() => setDisplayMenu(false)}
          visible={displayMenu}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>   
    </div>
  );
}

export default Navigation;
