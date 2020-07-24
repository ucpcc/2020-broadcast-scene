import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RatioWrapper from './components/RatioWrapper';
import TimerLarge from './components/TimerLarge';

function App() {
  return (
    <RatioWrapper>
      <Switch>
        <Route exact path="/timer">
          <TimerLarge />
        </Route>
      </Switch>
    </RatioWrapper>
  );
}

export default App;
