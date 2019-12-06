import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Landing from './components/layout/landing';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
     <Navbar></Navbar>
       <Route exact path='/' component={Landing}></Route>
       <div className="container">
         <Route exact path='/register' component={Register}></Route>
         <Route exact pathe='/login' component={Login}></Route>
         </div>  
       <Footer></Footer>
    </div>
    </Router>
    
  );
}

export default App;
