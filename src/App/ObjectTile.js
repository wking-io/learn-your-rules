import React from 'react';
import styled from 'styled-components';
import { UnderlineLink } from './Buttons';
import SubHeading from './SubHeading';
import Copy from './Copy';
import NumberedHeader from './NumberedHeader';
import { media } from '../lib/media';

const ObjectTile = ({ object, quizTypes, index, isMinimal, theme }) => (
  <Tile isMinimal={isMinimal}>
    <NumberedHeader theme={theme} number={index} />
    <main>
      <SubHeading>{object.name}</SubHeading>
      <Copy>{object.description}</Copy>
      <ul className="list ma0 pa0">
        <li className="mb4" key="study-guide">
          <UnderlineLink to={`/study-guide/${object.id}`} theme={theme}>
            Study Guide
          </UnderlineLink>
        </li>
        {quizTypes.map(quiz => (
          <li className="mb4" key={quiz.id}>
            <UnderlineLink to={`/quiz/${object.id}/${quiz.id}`} theme={theme}>
              {quiz.name}
            </UnderlineLink>
          </li>
        ))}
      </ul>
    </main>
  </Tile>
);

export default ObjectTile;

const Tile = styled.div`
  margin: 0 0 16rem 0;

  ${media.m`
    flex: 0 0 calc(50% - 8rem);
    margin: 0 0 8rem 0;
  `} ${props =>
      props.isMinimal ||
      media.l`
    flex-basis: calc(33% - 8rem);
  `};
`;
