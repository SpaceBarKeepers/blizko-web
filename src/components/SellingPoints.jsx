import React from 'react';
import './sellingPoints.scss';

function SellingPoints() {
  return (
    <section id="about" className="sellingPoints">
      <h3>
        <span>blízko.</span> vaše možnosti přes ulici
      </h3>
      <div className="sellingPoints-div">
        <div>
          <h4>Propojuje</h4>
          <p>
            jednotlivce a domácnosti v oblastech blízkých každodenním činnostem
            jako je zero waste přístup, domácí a sezónní potraviny a přebytky ze
            zahrady, hlídání mazlíčků, půjčování věcí či swapování jednoduše
            přes ulici.
          </p>
        </div>
        <div>
          <h4>Buduje</h4>
          <p>
            komunitu a sousedské vztahy. Ať už jde o sdílený sport, koníčky nebo
            sousedství.
          </p>
        </div>
        <div>
          <h4>Přispívá</h4>
          <p>k prostředí, které je udržitelné, sousedské a&nbsp;bezpečné.</p>
        </div>
      </div>
    </section>
  );
}

export default SellingPoints;
