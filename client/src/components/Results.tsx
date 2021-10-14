import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Button } from "antd";

export default function Results(props: any) {
  const { loading, displayResults } = props;
  const shortLink = useSelector((state: RootState) => state.session.linkReducer.linkObject);
  
  console.log(shortLink.shortUrl);
  
  return (
    <div id="results">
      {
        loading && shortLink.originalUrl.length <= 0 && (
          <div className="loading">
            <span>.</span><span>.</span><span>.</span>
          </div>
        )
      }

    { displayResults && shortLink.originalUrl.length > 0 && (
    <div className="results">
      <a className="long" href={`${shortLink.originalUrl}`} target="_blank" rel="noopener noreferrer"><p>{shortLink.originalUrl}</p></a>
      <a className="short" href={`${shortLink.shortUrl}`} target="_blank" rel="noopener noreferrer"><p>{shortLink.shortUrl}</p></a>
      <Button className="copy">Copy</Button>
    </div>
    )}
    </div>
  )
}
