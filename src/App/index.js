import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Nav from './Nav';
import Dashboard from './Dashboard';
import StudyGuide from './StudyGuide';
import Container from './Container';

const App = () => (
  <BrowserRouter>
    <Container>
      <Nav />
      <Switch>
        <Route component={Dashboard} exact path="/" />
        <Route component={Quiz} path="/quiz/:objectId/:quizId" />
        <Route component={StudyGuide} path="/study-guide/:objectId" />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
