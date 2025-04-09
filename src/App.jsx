import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ChairmanMessage from './components/ChairmanMessage';
import TeamSection from './components/TeamSection';
import ActivitySection from './components/ActivitySection';
import DonationInfo from './components/DonationInfo';
import AppPromoSection from './components/AppPromoSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import './Global.css';

function App() {


  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ChairmanMessage />
      <TeamSection />
      <ActivitySection />
      <DonationInfo />
      <AppPromoSection />
      <PartnersSection />
      <Footer />
     
    </>
  )
}

export default App
