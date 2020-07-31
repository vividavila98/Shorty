import React from "react";
import { Input } from 'antd';
import "../styles/link.scss";
import recognition from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import customize from "../assets/images/icon-fully-customizable.svg";

function Link() {
  return (
    <div className="second-section">
      <section className="link">
        <div className="box">
          <Input className="input" placeholder="Shorten a link here ..." />
          <a href="#" className="shorten">Shorten It!</a>
        </div>
      </section>
      <section className="statistics">
          <h3 className="title">Advanced Statistics</h3>
          <p className="stats-sub">
            Track how your links are performing across the web 
            with our advanced statistics dashboard.
          </p>
          <div className="cards-container">
              <div className="card">
                  <span className="icon-container">
                    <img src={recognition}/>
                  </span>
                  <h4>Brand Recognition</h4>
                  <p>
                      Boost your brand recognition with 
                      each click. Generic links don’t mean a 
                      thing. Branded links help instil confidence 
                      in your content.
                  </p>
              </div>
              <div className="card">
                  <h4>Detailed Records</h4>
                  <p>
                      Boost your brand recognition with 
                      each click. Generic links don’t mean a 
                      thing. Branded links help instil confidence 
                      in your content.
                  </p>
              </div>
              <div className="card">
                  <h4>Fully Customizable</h4>
                  <p>
                      Boost your brand recognition with 
                      each click. Generic links don’t mean a 
                      thing. Branded links help instil confidence 
                      in your content.
                  </p>
              </div>
          </div>
      </section>
    </div>
  );
}

export default Link;
