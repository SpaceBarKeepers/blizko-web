import React from 'react';
import mockup1 from '../images/MockupHome.png';

function Offer() {
  return (
    <section>
      <h3>Objevte možnosti, které kolem sebe máte, ale nevíte o nich.</h3>
      <p>
        Znáte své nejbližší sousedy? Víte, že o patro níž bydlí soused s
        vermikompostérem, ke kterému můžete odnést svůj bioodpad? Že v sousedním
        vchodě žije rodina, která vášnivě fermentuje a od které si můžete
        zakoupit čerstvou fermentovanou limonádu? A přímo nad Vámi je někdo, kdo
        po večerech vyžehlí rád i Vaše prádlo? Nevíte. Zatím.
      </p>
      <img src={mockup1} alt="" />
    </section>
  );
}

export default Offer;
