import React from 'react';
import mockup2 from '../images/MockupProfile.png';
import './search.scss';

function Search() {
  return (
    <section className="search">
      <div>
        <h3>
          Prodejte sousedům přebytky ze zahrady. Půjčte jim vrtačku, nabídněte
          kvásek nebo doučujte španělštinu. PŘES ULICI.
        </h3>
        <p>
          Máte zahrádku a nestíháte v sezóně spotřebovat všechnu úrodu? Máte
          vrtačku, kterou použijete dvakrát do roka a jinak se na ní práší? A co
          třeba lyže, které už nevyužijete? Vyměňte je. Prodejte. Darujte.
          Směňte.
        </p>
      </div>
      <div className="mockupWrapper">
        <img className="mockup" src={mockup2} alt="" />
      </div>
    </section>
  );
}

export default Search;
