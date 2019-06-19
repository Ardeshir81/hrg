import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Wizard from './views/Wizard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={'/step'} component={Wizard} />
          <Route path={'/'} exact component={() => (<Link to={"/step/mobile"}>Start</Link>)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
