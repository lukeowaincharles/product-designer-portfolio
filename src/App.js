import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import HowIDoIt from './components/HowIDoIt';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <HowIDoIt />
    </div>
  );
}

export default App;
