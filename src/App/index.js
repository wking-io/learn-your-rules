import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Dashboard from './Dashboard';
import StudyGuide from './StudyGuide';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/quiz/:objectId/:quizId" component={Quiz} />
      <Route path="/study-guide/:objectId" component={StudyGuide} />
    </Switch>
  </BrowserRouter>
);

export default App;
