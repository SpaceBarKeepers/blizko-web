import React from 'react';
import craft from '../images/craft.png';
import jidlo from '../images/jidlo.png';
import lide from '../images/lide.png';
import swap from '../images/swap.png';
import zero from '../images/zero.png';
import vypomoc from '../images/vypomoc.png';
import pestovani from '../images/pestovani.png';
import mazlicci from '../images/mazlicci.png';
import './targetGroup.scss';

function TargetGroup() {
  return (
    <section id="personas" className="personas">
      <h3>Pro koho je aplikace blízko.</h3>
      <div className="personasWrapper">
        <img src={jidlo} alt="" />
        <img src={zero} alt="" />
        <img src={pestovani} alt="" />
        <img src={vypomoc} alt="" />
        <img src={mazlicci} alt="" />
        <img src={lide} alt="" />
        <img src={swap} alt="" />
        <img src={craft} alt="" />
      </div>
    </section>
  );
}

export default TargetGroup;
