import React from 'react';
import './App.css';

import { Navbar, Calculator } from './components';
import {Header, Services, Win, RevCal, Contact, About, Footer} from './containers';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Calculator />
      <Win />
      <RevCal />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default App;
