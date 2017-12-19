import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { UnderlineLink } from './Buttons';
import SubHeading from './SubHeading';
import Copy from './Copy';
import NumberedHeader from './NumberedHeader';
import { media } from '../lib/media';

const ObjectTile = ({ object, quizTypes, index, isMinimal, theme, onClick }) => (
  <Tile isMinimal={isMinimal}>
    <NumberedHeader number={index} theme={theme} />
    <main>
      <SubHeading>{object.name}</SubHeading>
      <Copy>{object.description}</Copy>
      <ul className="list ma0 pa0">
        <li className="mb4" key="study-guide">
          <UnderlineLink onClick={onClick} theme={theme} to={`/study-guide/${object.id}`}>
            Study Guide
          </UnderlineLink>
        </li>
        {quizTypes.map(quiz => (
          <li className="mb4" key={quiz.id}>
            <UnderlineLink onClick={onClick} theme={theme} to={`/quiz/${object.id}/${quiz.id}`}>
              {quiz.name}
            </UnderlineLink>
          </li>
        ))}
      </ul>
    </main>
  </Tile>
);

ObjectTile.propTypes = {
  index: PropTypes.number.isRequired,
  isMinimal: PropTypes.bool.isRequired,
  object: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  quizTypes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  theme: PropTypes.string,
};

ObjectTile.defaultProps = {
  theme: '',
};

export default ObjectTile;

const Tile = styled.div`
  margin: 0 0 16rem 0;

  ${media.m`
    flex: 0 0 calc(50% - 8rem);
    margin: 0 0 8rem 0;
  `} ${({ isMinimal }) =>
      isMinimal ||
      media.l`
      flex-basis: calc(33% - 8rem);
  `};
`;
