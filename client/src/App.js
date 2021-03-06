import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
import store from'./store'
// import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/footer';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Landing from './components/layout/landing';
import Profile from './components/auth/profile';
import './App.css';



function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
              <Navbar></Navbar>
                <Route exact path='/' component={Landing}></Route>
                <Route exact path='/deveconn' component={Landing}></Route>
                <div className="container">
                  <Route exact path='/register' component={Register}></Route>
                  <Route exact path='/login' component={Login}></Route>
                  <Route exact path='/profile' component={Profile}></Route>
                  </div>  
                <Footer></Footer>
          </div>
        </Router>
    </Provider>
    
  );
}

export default App;
