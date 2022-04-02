import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhatIDo from './components/sections/WhatIDo';
import HowIDoIt from './components/sections/HowIDoIt';
import WhoIDoItFor from './components/sections/WhoIDoItFor';
import './App.scss';
import Testimonials from './components/sections/Testimonials';
import WhoIAm from './components/sections/WhoIAm';
import GetInTouch from './components/sections/GetInTouch';
import RecentProjects from './components/sections/RecentProjects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <WhatIDo />
      <RecentProjects />
      <HowIDoIt />
      <WhoIDoItFor />
      <Testimonials />
      <WhoIAm />
      <GetInTouch />
    </div>
  );
}

export default App;
