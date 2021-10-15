import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUrl } from "../store/session/actions";
import "../styles/link.scss";
import Results from "./Results";
import InputField from "./InputField";

export default function Link() {
  const dispatch = useDispatch();

  const [link, setLink] = useState("");
  const [displayResults, setDisplayResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setLoading(true);
    dispatch(postUrl(link)); 
    setLink(""); 
    setDisplayResults(true);
  }

  const handleChange = (e:any) => {
    setLink(e.target.value);
    setCopied(false);
  }

  const handleCopy = () => {
    setCopied(true);
  }

  return (
      <section className="link container">
        <InputField link={link} handleClick={handleClick} handleChange={handleChange}/>
        <Results loading={loading} displayResults={displayResults} handleCopy={handleCopy} copied={copied}/>
      </section>
  );
};
