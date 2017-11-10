import find from '../../helpers/find';
import multipleChoice from './multipleChoice';
import trueFalse from './trueFalse';
import fillInTheBlank from './fillInTheBlank';

const quizTypes = [multipleChoice, trueFalse, fillInTheBlank];

export const getQuizType = find(quizTypes, 'id');
export const getQuizName = quizId => getQuizType(quizId).name;
export const getQuizQuestionTitle = quizId => getQuizType(quizId).questionTitle;
export const getQuizShowSubmit = quizId => getQuizType(quizId).showSubmit;
export default quizTypes;
