import React from 'react';
import styled from 'styled-components';
import objects from '../../lib/data/objects';
import quizTypes from '../../lib/data/quizTypes';
import { media } from '../../lib/media';
import MethodTile from './MethodTile';

const SelectQuiz = () => (
  <div className="w-90 center">
    <MethodList>
      {objects.map((object, i) => (
        <MethodTile key={object.id} object={object} quizTypes={quizTypes} index={i} />
      ))}
    </MethodList>
  </div>
);

export default SelectQuiz;

const MethodList = styled.section`
  ${media.m`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -8rem 0 0;
  `};
`;
