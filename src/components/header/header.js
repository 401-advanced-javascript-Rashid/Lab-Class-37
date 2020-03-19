/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

const Header = () => {

  return(
    <> <div className="header">
      <div className="inner_header">
        <div className="logo_container">
          <h1 id="h1"> Super<span id="offset">Cars</span></h1>
        </div> <ul className="navigation">
          <a><li className="li">Home</li></a>
          <a><li className="li">Cars</li></a>
          <a><li className="li">About</li></a>
          <a><li className="li">Contact</li></a>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Header ;