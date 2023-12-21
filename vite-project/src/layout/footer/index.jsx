import React from "react";
import "./index.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <FaMapMarkerAlt />
                    Passages of Lorem Ipsum available
                  </a>
                </li>
                <li>
                  <a href="phone">
                    <FaPhoneAlt />
                    Call:+012334567890
                  </a>
                </li>
                <li>
                  <a href="email">
                    <IoMdMail />
                    demo@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
