import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home/home';
import TailWind from './pages/tailwind/tailwind';
import Header from './components/header/header';
import './styles/output.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/tail-wind">
            <TailWind />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
