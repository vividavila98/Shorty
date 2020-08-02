import React, { useState, useEffect } from "react";
import { Input, Button } from 'antd';
import "../styles/link.scss";
import recognition from "../assets/images/icon-brand-recognition.svg";
import detailed from "../assets/images/icon-detailed-records.svg";
import customize from "../assets/images/icon-fully-customizable.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { postUrl } from "../store/session/actions";

function Link() {
  const dispatch = useDispatch();
  const shortLink = useSelector(
    (state: RootState) => state.session.linkReducer.linkObject
  );
  const [link, setLink] = useState("");
  const [displayResults, setDisplayResults] = useState(false);

  return (
    <div className="second-section">
      <section className="link">
        <div className="box">
          <Input className="input" placeholder="Shorten a link here ..." value={link} onChange={e => setLink(e.target.value)} />
          <Button className="shorten" onClick={() => {dispatch(postUrl(link)); setLink(""); setDisplayResults(true)}}>Shorten It!</Button>
        </div>
       { displayResults && shortLink.url.length > 0 && (
       <div className="results">
          <p className="long">{shortLink.url}</p>
          <a className="short" href={`https://rel.ink/${shortLink.hashid}`} target="_blank"><p>{`https://rel.ink/${shortLink.hashid}`}</p></a>
          <Button className="copy">Copy</Button>
        </div>
        )}
      </section>
      <section className="statistics">
          <h3 className="title">Advanced Statistics</h3>
          <p className="stats-sub">
            Track how your links are performing across the web 
            with our advanced statistics dashboard.
          </p>
          <div className="cards-container">
            <div className="card">
              <img className="icon" src={recognition}/>
              <h4>Brand Recognition</h4>
              <p>
                Boost your brand recognition with 
                each click. Generic links don’t mean a 
                thing. Branded links help instil confidence 
                in your content.
              </p>
            </div>
            <div className="card">
              <img className="icon" src={detailed}/>
              <h4>Detailed Records</h4>
              <p>
                  Boost your brand recognition with 
                  each click. Generic links don’t mean a 
                  thing. Branded links help instil confidence 
                  in your content.
              </p>
            </div>
            <div className="card">
            <img className="icon" src={customize}/>
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
