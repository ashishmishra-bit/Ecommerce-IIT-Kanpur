import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from '../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer';

function App() {
  return (
    <>
      <Router className ="container">
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
         
        </Switch>
        
         <Footer />
      </Router>
    </>
  );
}

export default App;
