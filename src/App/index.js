import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Quiz from './Quiz';
import SelectQuiz from './SelectQuiz';
import StudyGuide from './StudyGuide';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SelectQuiz} />
      <Route path="/quiz/:objectId/:quizId" component={Quiz} />
      <Route path="/study-guide/:objectId" component={StudyGuide} />
    </Switch>
  </div>
);

export default App;
