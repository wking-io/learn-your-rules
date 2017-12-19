import React from 'react';
import PropTypes from 'prop-types';
import { UnderlineLink } from './Buttons';
import SubHeading from './SubHeading';
import Copy from './Copy';
import Tile from './Tile';
import NumberedHeader from './NumberedHeader';
import quizTypes from '../lib/data/quizTypes';

const ObjectTile = ({ item, index, size, theme, onClick }) => (
  <Tile size={size}>
    <NumberedHeader number={index} theme={theme} />
    <main>
      <SubHeading>{item.name}</SubHeading>
      <Copy>{item.description}</Copy>
      <ul className="list ma0 pa0">
        <li className="mb4" key="study-guide">
          <UnderlineLink onClick={onClick} theme={theme} to={`/study-guide/${item.id}`}>
            Study Guide
          </UnderlineLink>
        </li>
        {quizTypes.map(quiz => (
          <li className="mb4" key={quiz.id}>
            <UnderlineLink onClick={onClick} theme={theme} to={`/quiz/${item.id}/${quiz.id}`}>
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
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

ObjectTile.defaultProps = {
  theme: '',
  onClick: () => {},
};

export default ObjectTile;
