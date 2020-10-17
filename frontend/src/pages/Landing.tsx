import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import logoImg from "../images/logo.svg";
import "../styles/pages/landing.css";

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Arapiraca</strong>
          <span>Alagoas</span>
        </div>

        <Link to="/app" className="enter-up">
          <FiArrowRight color="rgba(0,0,0,0.6)" size={26} />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
