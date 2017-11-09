import find from '../../helpers/find';
import multipleChoice from './multipleChoice';
import trueFalse from './trueFalse';
import fillInTheBlank from './fillInTheBlank';

const quizTypes = [multipleChoice, trueFalse, fillInTheBlank];

export const getQuizType = find(quizTypes, 'id');
export default quizTypes;
