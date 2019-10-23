import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HowIDidIt from './components/HowIDidIt';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <HowIDidIt />
    </div>
  );
}

export default App;
