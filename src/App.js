import React from 'react';
import './App.css';


import Navbar from './components/navbar';
import SectionOne from './components/sectionOne';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import SectionFour from './components/sectionFour';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
     <Footer/>
    </div>
  );
}

export default App;
