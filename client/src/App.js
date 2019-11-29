import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';
import Landing from './components/layout/landing';
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
       <Landing></Landing>
       <Footer></Footer>
    </div>
  );
}

export default App;
