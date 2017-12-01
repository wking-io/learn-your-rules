import React from 'react';
import objects from '../../lib/data/objects';
import quizTypes from '../../lib/data/quizTypes';
import MethodTile from './MethodTile';

const SelectQuiz = () => (
  <div className="w-90 center">
    <h1>Choose Your Quiz Below:</h1>
    <section className="flex flex-wrap">
      {objects.map((object, i) => (
        <MethodTile key={object.id} object={object} quizTypes={quizTypes} index={i} />
      ))}
    </section>
  </div>
);

export default SelectQuiz;
