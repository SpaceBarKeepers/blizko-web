import React, { useState } from 'react';
import Modal from 'react-modal';
import whiteLogo from '../images/whiteLogo.png';
import './footer.scss';

function Footer() {
  const [modalIsOpen, SetIsOpen] = useState(false);

  function openModal() {
    SetIsOpen(true);
  }

  function closeModal() {
    SetIsOpen(false);
  }

  const customStyles = {
    content: {
      fontSize: '16px',
      border: '2px solid #862009',
      padding: '24px',
      borderRadius: '16px',
    },
  };

  return (
    <footer>
      <div className="footerTop">
        <div className="footerLogoWrapper">
          {' '}
          <img src={whiteLogo} alt="" />
        </div>
        <div className="faqWrapper">
          <p>
            Máte nějaké další otázky k aplikaci? Napište komukoliv z nás na
            některý z výše uvedených emailů nebo navštivte{' '}
            <div className="openModal" onClick={openModal}>
              Nejčastější dotazy
            </div>
            .
          </p>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <button className="closeModal" onClick={closeModal}>
              Zavřít okno
            </button>
            <h5>O aplikaci</h5>
            <div>
              <h6>Co je blízko.?</h6>
              <p>
                Blízko. je komunitní mapa, která propojuje lidi v sousedství.
                Svým uživatelům zobrazuje možnosti, které mají téměř přes ulici,
                ale neví o nich. Umožní komukoli prodat přebytky ze zahrady,
                sehnat učitele španělštiny nebo si půjčit vrtačku. Poznat své
                nejbližší sousedy a získat pocit sounáležitosti. Utvářet vztahy
                ve skutečném světě je základní lidskou potřebou a sousedé jsou
                naší nejbližší komunitou, která má obrovský potenciál. Díky
                aplikaci blízko. ji budete moci poznat i Vy.
              </p>
              <h6>Jak aplikace blízko. funguje?</h6>
              <p>
                Uživateli se po přihlášení zobrazí mapa, která mu v jeho
                blízkosti zobrazí veškeré dostupné nabídky, které mu jsou k
                dispozici. Nabídky jsou řazeny do následujících kategorií: zero
                waste, jídlo a homemade, pěstování, domácí mazličci, crafts,
                sousedská výpomoc, lidé kolem mě a výměna věcí. Nabídky jsou pro
                uživatele zobrazeny od nejbližší po nejvzdálenější a uživatel
                může na kteroukoli z nich okamžitě reagovat. Uživatel může
                vložit ze své aktuální polohy/domovské adresy i své vlastní
                nabídky, které se ihned zobrazí sousedům z jeho rádiusu.
              </p>
              <h6>Co je můj sousedský rádius?</h6>
              <p>
                Sousedský rádius je předem daná oblast, která uživateli
                zobrazuje nabídky z jeho nejbližší komunity. Uživateli jsou tyto
                nabídky nejblíže a šetří mu čas s jejich realizací. Sousedský
                rádius přispívá k výměnám, které jsou realizovány jednoduše přes
                silnici.
              </p>
              <h6>Je možné můj sousedský rádius zvětšit?</h6>
              <p>
                Ano. Každý uživatel získá po přihlášení do aplikace blízko.
                14denní Premium verzi aplikace s neomezeným sousedským rádiusem
                pro celou Českou republiku. Po uplynutí této doby je nutné
                využít jednu z placených verzí aplikace, kdy je možné sousedský
                rádius zvětšit vždy o 2 km, nebo využít placené verze aplikace,
                kdy je sousedský rádius neomezený.
              </p>
            </div>
            <h5>Přihlášení a verifikace</h5>
            <div>
              <h6>Jak se přihlásit do aplikace blízko.?</h6>
              <p>
                Pro přihlášení do aplikace blízko. je nutné se zaregistrovat.
              </p>
              <h6>Jak verifikovat účet/adresu v aplikaci blízko.?</h6>
              <p>
                Verifikace přispívá k bezpečnému prostředí, které blízko. pro
                své uživatele buduje. Uživatel má několik možností, jak
                verifikovat svůj účet:{' '}
                <ul>
                  <li>
                    - ověření s využitím AI - autorizační platba přes
                    kreditní/debetní kartu
                  </li>{' '}
                  <li>- autorizační platba přes kreditní/debetní kartu</li>
                  <li>
                    - emailová pozvánka od verifikovaného uživatele (s minimálně
                    bronzovou úrovní verifikace)
                  </li>
                </ul>{' '}
                Po verifikaci účtu uživatel získá jednu ze tří úrovní dle
                vybraného způsobu ověření – bronzovou, stříbrnou či zlatou
                úroveň verifikace. Tato úroveň definuje stupeň ověření, které
                uživatel při registraci do aplikace zvolil. V profilu uživatele
                je úroveň verifikace viditelná pro ostatní uživatele.
              </p>
              <h6>Jaké jsou úrovně verifikace v aplikaci blízko?</h6>
              <p>
                Bronzová, stříbrná a zlatá úroveň verifikace.
                <br />
                Bronzová úroveň verifikace = uživatel se verifikoval jednou ze
                tří možných verifikací nebo získal 40 pozitivních hodnocení{' '}
                <br />
                Stříbrná úroveň verifikace = uživatel se verifikoval jednou ze
                tří možných verifikací a zároveň získal 40 pozitivních hodnocení{' '}
                <br />
                Zlatá úroveň verifikace = uživatel se verifikoval jednou ze tří
                možných verifikací a zároveň získal 80 pozitivních hodnocení
              </p>
              <h6>Jak si změnit v aplikaci blízko. adresu?</h6>
              <p>
                Během jednoho roku je možné svou adresu změnit třikrát. V
                případech, kdy je nutné adresu měnit víc než třikrát je nutné
                požádat podporu aplikace blízko. o verifikaci této změny.
              </p>
            </div>
            <h5>Můj účet a nastavení</h5>
            <div>
              <h6>Jak si v aplikaci blízko. změnit heslo?</h6>
              <p>
                Spusťte aplikaci blízko. V dolní liště menu klikněte na ikonu v
                pravém rohu – účet.
                <ol>
                  <li>v záložce účet klikněte na nastavení</li>
                  <li>v záložce nastavení klikněte na nastavení účtu</li>
                  <li>v záložce nastavení účtu klikněte na změnit heslo</li>
                  <li>zadejte své původní heslo pro přihlášení do aplikace</li>
                  <li>potvrďte původní heslo</li>
                  <li>zadejte nové heslo pro přihlášení do aplikace</li>
                  <li>potvrďte nové heslo</li>
                </ol>
              </p>
              <h6>Jak si změnit profilové jméno v aplikaci blízko.</h6>
              <p>
                Spusťte aplikaci blízko. V dolní liště menu klikněte na ikonu v
                pravém rohu – účet.
                <ol>
                  <li>v záložce účet klikněte na profil.</li>
                  <li>v záložce profil si změňte své profilové jméno.</li>
                  <li>potvrďte změny</li>
                </ol>
              </p>
              <h6>Jak přidat fotografii k mému profilu v aplikaci blízko.?</h6>
              <p>
                Spusťte aplikaci blízko. V dolní liště menu klikněte na ikonu v
                pravém rohu – účet{' '}
                <ol>
                  <li>v záložce účet klikněte na profil.</li>
                  <li>
                    v záložce profil klikněte u profilového jména na ikonu
                    fotoaparátu
                  </li>
                  <li>vyberte fotografii</li>
                  <li>potvrďte změny</li>
                </ol>
              </p>
            </div>
          </Modal>
        </div>
      </div>
      <div className="thankyou">
        Tým blízko. je finalistou{' '}
        <a href="https://www.nakopniprahu.cz/">
          pražského inovačního maratonu Nakopni Prahu 2022
        </a>
        , kterému tímto děkujeme za nakopnutí projekt realizovat.
      </div>
    </footer>
  );
}

export default Footer;
