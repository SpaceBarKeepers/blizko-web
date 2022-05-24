import React from 'react';
import './tryapp.scss';

function Tryapp() {
  return (
    <section id="try">
      <h3>Chcete si aplikaci vyzkoušet?</h3>
      <div className="tryOut">
        <div className="tryOutOption">
          <p>
            Nabízíme vám možnost proklikat si prototyp aplikace. Díky němu
            získáte jasnou představu o tom, jak bude aplikace vypadat, kde
            naleznete všechny důležité funkce. <br />
            Zkuste například vyhledat, jestli někdo ve vašem okolí nabízí letní
            jablka a domluvte nabídku. Podívejte se, jaké nabídky se mohou v
            jednotlivých kategoriích skrývat. Nebo si zkuste smazat vlastní
            nabídku kompotovaných meruněk.
          </p>
          <a
            className="tryOutBtn primary"
            href="https://www.figma.com/proto/WsgAzYj21DsZiz2HGZjEMQ/bl%C3%ADzko.?page-id=0%3A1&node-id=121%3A359&viewport=1067%2C571%2C0.1&scaling=scale-down&starting-point-node-id=121%3A359"
            target="_blank"
            rel="noreferrer"
          >
            Vyzkoušet prototyp
          </a>
        </div>
        <div className="tryOutOption marginLeft">
          <p>
            Aplikaci právě vyvíjíme, proto její testovací verze nemá dokončené
            všechny funkcionality. Chceme vám ale naši práci co nejvíce
            přiblížit, proto jsme i tuto rozpracovanou verzi zpřístupnili k
            testování. Bohužel zatím pouze pro iOS.
            <br />
            Do budoucna je samozřejmostí, že aplikace bude pro obě platformy.
            Její webovou verzi pak naleznete na této webové stránce.
          </p>
          <a
            className="tryOutBtn secondary"
            href="https://testflight.apple.com/join/MDj8YMdN"
            target="_blank"
            rel="noreferrer"
          >
            Otestovat aplikaci
          </a>
        </div>
      </div>
    </section>
  );
}

export default Tryapp;
