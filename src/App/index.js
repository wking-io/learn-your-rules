import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quiz from './Quiz';
import Dashboard from './Dashboard';
import StudyGuide from './StudyGuide';

const App = () => (
  <BrowserRouter>
    <Container>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/quiz/:objectId/:quizId" component={Quiz} />
        <Route path="/study-guide/:objectId" component={StudyGuide} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;

const Container = styled.div`
  max-width: 1060px;
  width: 90vw;
  margin: 8rem auto;
`;
