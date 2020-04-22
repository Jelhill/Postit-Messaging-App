import React from "react";
import nnamdi from "../Images/nnamdi.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='box-1'>
      <img src={nnamdi} alt='user' />
      <Link className='link'>Logout</Link>
    </div>
  );
};

export default Header;
