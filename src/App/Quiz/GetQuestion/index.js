import PropTypes from 'prop-types';
import sample from 'lodash.sample';
import setupQuizObject from '../../../lib/data/methods';

const GetQuestion = ({ objectId, quizId, method, render }) => {
  const question = sample(method.questions);
  const quiz = setupQuizObject(objectId);
  const getOptions = key => {
    const options = {
      'multiple-choice': quiz.getMultipleChoiceAnswers(method.name),
      'true-false': ['True', 'False'],
      'fill-in-the-blank': false,
    };

    return options[key];
  };
  return render({
    question,
    options: getOptions(quizId),
    randomMethod: quizId === 'true-false' ? quiz.getRandomMethod(method.name) : false,
  });
};

GetQuestion.propTypes = {
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.func).isRequired,
  }).isRequired,
  objectId: PropTypes.string.isRequired,
  quizId: PropTypes.string.isRequired,
};

export default GetQuestion;
