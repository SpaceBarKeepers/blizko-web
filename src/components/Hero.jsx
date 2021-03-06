import React from 'react';
import hero from '../images/hero.png';
import './hero.scss';

function Hero() {
  return (
    <>
      <section className="heroSection">
        <div className="heroClaim">
          <h1>blízko.</h1>
          <h2>Sousedství, jak&nbsp;ho ještě neznáte</h2>
        </div>
        <div className="heroImgWrapper">
          <img src={hero} alt="houses illustration" />
        </div>
      </section>
    </>
  );
}

export default Hero;
