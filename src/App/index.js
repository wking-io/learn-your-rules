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
        <Route exact path="/" component={Dashboard} />
        <Route path="/quiz/:objectId/:quizId" component={Quiz} />
        <Route path="/study-guide/:objectId" component={StudyGuide} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
