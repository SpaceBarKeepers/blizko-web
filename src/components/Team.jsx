import React from 'react';
import './team.scss';

function Team() {
  return (
    <section id="aboutUs">
      <h3>Kdo tvoří blízko.</h3>
      <div className="team">
        <div>
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
              <a href="mailto:natalie.sluneckova@gmail.com">
                natalie.sluneckova@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Karel Dohnal</h4>{' '}
          <ul>
            <li>Zodpovědný za vývoj backendové části aplikace.</li>
            <li>Garant právních témat.</li>
            <li>
              Oblíbená kategorie v blízko.: Sousedská výpomoc a Lidé kolem mě.
            </li>
            <li>
              {' '}
              Kontakt:
              <a href="mailto:karel@spacebarkeepers.com">
                karel@spacebarkeepers.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Bára Marešová</h4>{' '}
          <ul>
            <li>
              Zodpovědná za UX design, grafiku a&nbsp;frontendovou část aplikace.
            </li>
            <li>Garantka komunikace s médii a zákazníky.</li>
            <li>
              Oblíbená kategorie v blízko.: Jídlo a homemade a Domácí mazlíčci.
            </li>
            <li>
              Kontakt:
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
