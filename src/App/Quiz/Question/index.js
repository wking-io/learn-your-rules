import PropTypes from 'prop-types';
import sample from 'lodash.sample';
import { getMultipleChoiceAnswers, getRandomMethod } from '../../../lib/data/methods';

const Question = ({ objectId, quizId, method, render }) => {
  const question = sample(method.questions);
  const getOptions = key => {
    const options = {
      'multiple-choice': getMultipleChoiceAnswers(objectId, method.name),
      'true-false': ['True', 'False'],
      'fill-in-the-blank': false,
    };

    return options[key];
  };
  return render({
    question,
    options: getOptions(quizId),
    randomMethod: quizId === 'true-false' ? getRandomMethod(objectId, method.name) : false,
  });
};

Question.propTypes = {
  objectId: PropTypes.string.isRequired,
  quizId: PropTypes.string.isRequired,
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.func).isRequired,
  }).isRequired,
};

export default Question;
