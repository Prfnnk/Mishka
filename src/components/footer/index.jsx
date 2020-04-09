import React from "react";
import "./styles/style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo"></div>
      <div className="footer__links">
        <a
          href="https://www.instagram.com/prfnnk/"
          target="_blanck"
          className="footer__links-item footer__links-item_ig"
        >
          kekpek
        </a>
        <a
          href="https://vk.com/id39391032"
          target="_blanck"
          className="footer__links-item footer__links-item_fb"
        >
          pek
        </a>
        <div className="footer__links-item footer__links-item_tw"></div>
      </div>
    </div>
  );
};
export default Footer;
