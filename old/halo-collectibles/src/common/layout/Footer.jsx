import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li className="footer-links__link">
          <a
            href="https://github.com/mickelsonmichael/HaloCollectibles"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li className="footer-links__link">
          <Link to="/status">Status</Link>
        </li>
        <li className="footer-links__link">
          <a
            href="https://www.trueachievements.com/game/Halo-The-Master-Chief-Collection/achievements"
            target="_blank"
            rel="noopener noreferrer"
          >
            TrueAchievements
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
