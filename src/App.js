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

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <WhatIDo />
      <HowIDoIt />
      <WhoIDoItFor />
      <Testimonials />
      <WhoIAm />
      <GetInTouch />
    </div>
  );
}

export default App;
