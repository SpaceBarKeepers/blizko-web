import React from 'react';
import kaja from "../images/kaja.webp";
import bara from "../images/bara.webp";
import './team.scss';

function Team() {
  return (
    <section id="aboutUs" className="aboutUs">
      <h3>Kdo tvoří blízko.</h3>
      <div className="team">
        <div>
          <img src="https://ca.slack-edge.com/T030UABAM19-U031SC7DZNF-cc727de9dcdf-512" className="fotoTeam" alt="" />
          <h4>Natálie Slunečková</h4>
          <ul>
            <li>
              Zodpovědná za klíčová partnerství a obchodní strategii
              společnosti.
            </li>
            <li>Garantka marketingových a finančních aktivit.</li>
            <li>
              Oblíbená kategorie v blízko.: Jídlo a homemade a Zero waste.
            </li>
            <li>
              Kontakt:
              <br />
              <a href="mailto:natalie.sluneckova@gmail.com">
                natalie.sluneckova@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src={kaja} className="fotoTeam" alt="" />
          <h4>Karel Dohnal</h4>{' '}
          <ul>
            <li>Zodpovědný za vývoj backendové části aplikace.</li>
            <li>Garant právních témat.</li>
            <li>
              Oblíbená kategorie v blízko.: Sousedská výpomoc a Lidé kolem mě.
            </li>
            <li>
              {' '}
              Kontakt: <br />
              <a href="mailto:karel@spacebarkeepers.com">
                karel@spacebarkeepers.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src={bara} className="fotoTeam" alt="" />
          <h4>Bára Marešová</h4>{' '}
          <ul>
            <li>
              Zodpovědná za UX design, grafiku a&nbsp;frontendovou část
              aplikace.
            </li>
            <li>Garantka komunikace s médii a zákazníky.</li>
            <li>
              Oblíbená kategorie v blízko.: Jídlo a homemade a Domácí mazlíčci.
            </li>
            <li>
              Kontakt: <br />
              <a href="mailto:bara@spacebarkeepers.com">
                bara@spacebarkeepers.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Team;
