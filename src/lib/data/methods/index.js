import sampleSize from 'lodash.samplesize';
import sample from 'lodash.sample';
import shuffle from 'lodash.shuffle';
import differenceBy from 'lodash.differenceby';
import getProp from '../../helpers/getProp';
import filterOut from '../../helpers/filterOut';
import getSampleSolo from '../../helpers/getSampleSolo';
import array from './arrayMethods';

const methods = {
  array,
};

export const getMethod = (objectId, answers) =>
  sample(differenceBy(methods[objectId], answers, 'name'));

export const getMethodCount = object => methods[object].length;

export const getQuestion = method => sample(method.questions);

const getFilteredMethodNames = (objectId, methodName) =>
  methods[objectId].filter(filterOut('name', methodName)).map(getProp('name'));

export const getMultipleChoiceAnswers = (objectId, methodName) =>
  shuffle([methodName, ...sampleSize(getFilteredMethodNames(objectId, methodName), 3)]);

export const getTrueFalseMethod = methodName =>
  getSampleSolo([methodName, getFilteredMethodNames(methodName)]);

export default methods;
