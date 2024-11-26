import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./footer.css";

function Footer() {
  return (
    <div className='Footer'>
      <h3>For more information</h3>
      <div>
        <a href='https://github.com/MaidHalilovic' target='_blank'>
          <FaGithub size={35} color='black' />
        </a>
        <a href='https://instagram.com' target='_blank'>
          <FaInstagram size={35} color='black' />
        </a>
        <a href='https://twitter.com' target='_blank'>
          <BsTwitterX size={35} color='black' />
        </a>
        <a href='https://gmail.com' target='_blank'>
          <MdEmail size={35} color='black' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
