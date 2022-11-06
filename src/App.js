import logo from './logo.svg';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Navs from './components/nav/Navs';
import Experience from './components/experience/Experience';  
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footers from './components/footer/Footers';
import React, { Component }  from 'react'



function App() {
  return (
    <>
     <Header/>
     <About/>
     <Experience/>
     
     <Portfolio/>
     <Contact/>
     <Footers/>
     </>
  )
     
  }

export default App;
