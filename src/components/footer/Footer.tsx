import { Button } from "../../shared/button/Button";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import "./Footer.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
          borderBottom: "1px solid gray",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <a>OUR FOOD</a>
          <a>LOCATIONS</a>
          <a>ABOUT US</a>
          <a>NUTRITION</a>
          <a>NEWS</a>
          <a>CONTACT</a>
          <a>FUNDRAISER</a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <h2>WANT FREE FOOD?</h2>
          <img src="https://www.caferio.com/svg/badge-play-store.svg" />
          <img src="https://www.caferio.com/svg/badge-app-store.svg" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 0",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="">© 2020 CAFE RIO. ALL RIGHTS RESERVED</a>
          <a href="">TERMS OF USE</a>
          <a href="">TERMS AND CONDITIONS</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">DO NOT SELL MY PERSONAL INFORMATION</a>
          <a href="">AMBASSADOR</a>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <AiOutlineInstagram size={20} />
          <BsTwitter size={20} />
          <BsFacebook size={20} />
          <FaPinterestP size={20} />
        </div>
      </div>
    </div>
  );
};
export { Footer };
