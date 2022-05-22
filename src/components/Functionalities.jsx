import React from 'react';
import mockup3 from '../images/MockupMap.png';
import './functionalities.scss';

function Functionalities() {
  return (
    <section id="how" className="how">
      <h3>Jak blízko. funguje?</h3>
      <span>Verifikuje své uživatele.</span>
      <span>Lokalizuje jejich polohu.</span>
      <span>Zobrazí nejbližší nabídky.</span>
      <div className="mockupWrapper">
        <img className="mockup" src={mockup3} alt="" />
      </div>
    </section>
  );
}

export default Functionalities;
