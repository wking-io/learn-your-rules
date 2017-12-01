import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import QuizIcon from './QuizIcon';
import Box from '../Box';
import { primary } from '../../lib/colors';

const MethodTile = ({ object, quizTypes, index }) => (
  <Box className="w-third ba bw1 mr3" key={object.id} theme={object.color}>
    <div className="pa4">
      <h2 className="mt1 mb0">{`${index.toString().length === 1 ? `0${index + 1}` : index + 1}. ${
        object.name
      }`}</h2>
      <p className="lh-copy mb1">{object.description}</p>
    </div>
    <ul className="list ma0 pa0">
      <MethodOption className="bt" theme={object.color}>
        <Link
          to={`/study-guide/${object.id}`}
          className="link black underline-hover flex items-center pa3"
        >
          <QuizIcon className="mr3 w-10" icon="study-guide" color={object.color} />
          Study Guide
        </Link>
      </MethodOption>
      {quizTypes.map(quiz => (
        <MethodOption className="bt" key={quiz.id} theme={object.color}>
          <Link
            to={`/quiz/${object.id}/${quiz.id}`}
            className="link black underline-hover flex items-center pa3"
          >
            <QuizIcon className="mr3 w-10" icon={quiz.id} color={object.color} />
            {quiz.name}
          </Link>
        </MethodOption>
      ))}
    </ul>
  </Box>
);

const MethodOption = styled.li.attrs({
  theme: props => props.theme || primary,
})`
  border-color: ${props => props.theme};
`;

export default MethodTile;
