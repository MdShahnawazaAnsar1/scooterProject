import React, { useState } from "react";
import "./header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import img5 from "../images/Rectangle5.png";
import img4 from "../images/Rectangle4.png";
import img3 from "../images/Rectangle3.png";
import { ClickAwayListener } from "@mui/material";
const Header = () => {
  const [showDrop, setShowDrop] = useState(false);
  const handleClickAway = () => {
    setShowDrop(false);
  };
  return (
    <>
      <div className="header">
        <div>Support : +91 - 9090909090</div>
        <div style={{ color: "red" }}>Book a FREE Test Ride Now </div>
        <div className="leftHeader">
          <div className="contact">Contact</div>
          <div className="carrier">Carrier</div>
          <div className="media">
            Media
            <KeyboardArrowDownIcon className="downArrow" />
          </div>
        </div>
      </div>
      <div className="subHeader">
        <div className="logo">
          <div className="img3">
            <img src={img3} alt="hello" />
          </div>
          <div className="img4">
            <img src={img4} alt="hello" />
          </div>
          <div className="img5">
            <img src={img5} alt="hello" />
          </div>
        </div>
        <div className="subHeaderLeft">
          <div className="About">About</div>
          <div className="Store">Locate Store</div>
          <div className="Scooters" onClick={() => setShowDrop(!showDrop)}>
            Scooters <KeyboardArrowDownIcon className="Arrow" />
          </div>
          <div className="Assistance">
            Purchase Assistance <KeyboardArrowDownIcon className="Arrow" />
          </div>
          <div className="btn">
            <button className='btnDealership'>Dealership</button>
          </div>
        </div>
      </div>
      {showDrop && (
        <ClickAwayListener onClickAway={handleClickAway}>
          {/* <div className="dropDown"> */}
          <ul className="dropDown">
            <li>HRX350 Bike</li>
            <li>GEAR350 EB</li>
            <li>RX - AK290 EB</li>
            <li>GBM -Heavy</li>
          </ul>
          {/* </div> */}
        </ClickAwayListener>
      )}
    </>
  );
};

export default Header;
