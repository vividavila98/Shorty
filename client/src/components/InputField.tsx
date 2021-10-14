import React, {useState} from 'react';
import { Button } from 'antd';

export default function Input(props: any) {
  const { link, handleClick, handleChange } = props;

    return (
        <div className="box">
          <input 
            className="input" 
            placeholder="Shorten a link here ..." 
            value={link} 
            onChange={handleChange} 
          />
          <Button 
            className="shorten" 
            onClick={handleClick}>
              Shorten It!
          </Button>
        </div>
    )
}
