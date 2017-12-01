import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { primary } from '../../lib/colors';
import { condensed } from '../../lib/fonts';
import { media } from '../../lib/media';

const MethodTile = ({ object, quizTypes, index, isMinimal }) => (
  <Tile isMinimal={isMinimal}>
    <TileHeader>
      <TileNumber>{index.toString().length === 1 ? `0${index + 1}` : index + 1}</TileNumber>
    </TileHeader>
    <main>
      <SubHeading>{object.name}</SubHeading>
      <Copy>{object.description}</Copy>
      <ul className="list ma0 pa0">
        <li className="mb4" key="study-guide">
          <UnderlineLink to={`/study-guide/${object.id}`} theme={object.color}>
            Study Guide
          </UnderlineLink>
        </li>
        {quizTypes.map(quiz => (
          <li className="mb4" key={quiz.id}>
            <UnderlineLink to={`/quiz/${object.id}/${quiz.id}`} theme={object.color}>
              {quiz.name}
            </UnderlineLink>
          </li>
        ))}
      </ul>
    </main>
  </Tile>
);

export default MethodTile;

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
  background-image: linear-gradient(${primary}, ${primary});
  background-size: 100% 1.5rem;
  background-position: 0 1rem;
  background-repeat: no-repeat;
  text-align: right;
`;

const TileNumber = styled.span`
  line-height: 1;
  font-weight: 800;
  background-color: white;
  padding: 0 0 0 2rem;
`;

const SubHeading = styled.h2`
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: ${condensed};
  margin: 3rem 0 6rem;
`;

const Copy = styled.p`
  line-height: 1.5;
  margin: 0 0 6rem 0;
`;

const UnderlineLink = styled(Link)`
  font-weight: bold;
  color: ${primary};
  text-decoration: none;
  background-image: linear-gradient(
    ${transparentize(0.75, primary)},
    ${transparentize(0.75, primary)}
  );
  background-size: 100% 1.5rem;
  background-position: 0 100%;
  background-repeat: no-repeat;

  &:hover {
    background-image: linear-gradient(
      ${transparentize(0.5, primary)},
      ${transparentize(0.5, primary)}
    );
  }
`;
