import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './Components/NavBar';
import './App.css';
import Home from './view/Inicio';
import Informacoes from './view/Informacoes';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/informacoes" component={Informacoes} />
          <Redirect path="*" to="/"/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
