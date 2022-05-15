import React from 'react';
import mockup2 from '../images/MockupProfile.png';

function Search() {
  return (
    <section>
      <h3>
        Prodejte sousedům přebytky ze zahrady. Půjčte jim vrtačku, nabídněte
        kvásek nebo doučujte španělštinu. PŘES ULICI.
      </h3>
      <p>
        Máte zahrádku a nestíháte v sezóně spotřebovat všechnu úrodu? Máte
        vrtačku, kterou použijete dvakrát do roka a jinak se na ní práší? A co
        třeba lyže, které už nevyužijete? Vyměňte je. Prodejte. Darujte. Směňte.
      </p>
      <img src={mockup2} alt="" />
    </section>
  );
}

export default Search;
