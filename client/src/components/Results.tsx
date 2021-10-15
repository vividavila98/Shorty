import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Results(props: any) {
  const { loading, displayResults, handleCopy, copied } = props;
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
      <a className="short" href={`${shortLink.shortUrl}`} target="_blank" rel="noopener noreferrer"><p>{shortLink.shortUrl.slice(12)}</p></a>

      <CopyToClipboard text={shortLink.shortUrl.slice(12)}
        onCopy={handleCopy}>
        <button className="copy">{copied ? "Copied!": "Copy"}</button>
      </CopyToClipboard>
    </div>
    )}
    </div>
  )
}
