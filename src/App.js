import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage'
import Footer from '@bit/hackathons_websites.reusable_component.components.footer';
import CustomNavBar from '@bit/hackathons_websites.reusable_component.custom-nav-bar';
import AboutPage from './components/AboutPage'
import logo from './images/Globechange@2x.png'
import Sponsors from './components/Sponsors'
import Challenges from './components/Challenges'
import Prizes from './components/Prizes'
import Judges from './components/Judges'
import Agenda from './components/Agenda'
import Blog from './components/Blog'


function App(props) {
  return (
    <div >
      <CustomNavBar {...props} colour="#C4CBCD" logo={logo} />
      <LandingPage />
      <AboutPage />
      <Sponsors />
      <Challenges />
      <Prizes />
      <Judges />
      <Agenda />
      <Blog />
      <Footer {...props} colour="#C4CBCD" />
    </div>
  );
}

export default App;
