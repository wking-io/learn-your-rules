import React from 'react';
import styled from 'styled-components';
import { UnderlineLink } from './Buttons';
import SubHeading from './SubHeading';
import Copy from './Copy';
import { primary, light } from '../lib/colors';
import { media } from '../lib/media';

const ObjectTile = ({ object, quizTypes, index, isMinimal, theme }) => (
  <Tile isMinimal={isMinimal}>
    <TileHeader theme={theme}>
      <TileNumber theme={theme}>
        {index.toString().length === 1 ? `0${index + 1}` : index + 1}
      </TileNumber>
    </TileHeader>
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

const TileHeader = styled.header`
  background-image: ${props =>
    props.theme === 'dark'
      ? `linear-gradient(${light}, ${light})`
      : `linear-gradient(${primary}, ${primary})`};
  background-size: 100% 1.5rem;
  background-position: 0 1rem;
  background-repeat: no-repeat;
  text-align: right;
`;

const TileNumber = styled.span`
  line-height: 1;
  font-weight: 800;
  background-color: ${props => (props.theme === 'dark' ? primary : light)};
  padding: 0 0 0 2rem;
`;
