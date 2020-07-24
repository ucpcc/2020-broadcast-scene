import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogoOverlay from './components/LogoOverlay';
import MainScene from './components/MainScene';
import RatioWrapper from './components/RatioWrapper';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <RatioWrapper>
      <LogoOverlay />
      <Switch>
        <Route exact path="/timer">
          <Stopwatch />
        </Route>
        <Route exact path="/main">
          <MainScene />
        </Route>
      </Switch>
    </RatioWrapper>
  );
}

export default App;
