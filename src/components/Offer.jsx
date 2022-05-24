import React from 'react';
import mockup1 from '../images/MockupHome.png';
import './offer.scss';

function Offer() {
  return (
    <section className="offer">
      <div>
        <h3>Objevte možnosti, které kolem sebe máte, ale nevíte o nich.</h3>
        <p>
          Znáte své nejbližší sousedy? Víte, že o patro níž bydlí soused
          s&nbsp;vermikompostérem, ke kterému můžete odnést svůj bioodpad?
          Že&nbsp;v&nbsp;sousedním vchodě žije rodina, která vášnivě fermentuje
          a od které si můžete zakoupit čerstvou fermentovanou limonádu? A přímo
          nad vámi je někdo, kdo po&nbsp;večerech vyžehlí rád i vaše prádlo?
          <br /> Nevíte? Zatím.
        </p>
      </div>
      <div className="mockupWrapper">
        <img className="mockup" src={mockup1} alt="" />
      </div>
    </section>
  );
}

export default Offer;
