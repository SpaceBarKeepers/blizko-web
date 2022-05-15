import React from 'react';
import hero from '../images/hero.png';
import './hero.scss';

function Hero() {
  return (
    <>
      <section className="heroSection">
        <div className="heroClaim">
          <h1>blízko.</h1>
          <h2>Sousedství, jak ho ještě neznáte</h2>
        </div>
        <div>
          <img src={hero} alt="houses illustration" />
        </div>
      </section>
    </>
  );
}

export default Hero;
