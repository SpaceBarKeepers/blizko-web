import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SellingPoints from './components/SellingPoints';
import Offer from './components/Offer';
import './landingPage.sass';
import Search from './components/Search';
import Functionalities from './components/Functionalities';
import TargetGroup from './components/TargetGroup';
import Team from './components/Team';
import Footer from './components/Footer';
import Tryapp from './components/Tryapp';

function LandingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <SellingPoints />
      <Offer />
      <Search />
      <Functionalities />
      <TargetGroup />
      <Tryapp />
      <Team />
      <Footer />
    </main>
  );
}

export default LandingPage;
