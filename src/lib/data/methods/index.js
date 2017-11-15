import sampleSize from 'lodash.samplesize';
import sample from 'lodash.sample';
import shuffle from 'lodash.shuffle';
import difference from 'lodash.difference';
import getProp from '../../helpers/getProp';
import filterOut from '../../helpers/filterOut';
import getSampleSolo from '../../helpers/getSampleSolo';
import array from './arrayMethods';

const methods = {
  array,
};

export const getMethod = (objectId, answers) => {
  const methodNames = methods[objectId].map(getProp('name'));
  const chosenMethod = sample(difference(methodNames, answers));
  return methods[objectId].find(method => method.name === chosenMethod);
};

export const getMethodCount = object => methods[object].length;

const getFilteredMethodNames = (objectId, methodName) =>
  methods[objectId].filter(filterOut('name', methodName)).map(getProp('name'));

export const getMultipleChoiceAnswers = (objectId, methodName) =>
  shuffle([methodName, ...sampleSize(getFilteredMethodNames(objectId, methodName), 3)]);

/*
 * This is a function to get a kinda random method.
 * We pass in the current method and then use that to get an array
 * of all the other methods so that the probability of getting the
 * correct method is more.
*/
export const getRandomMethod = (objectId, methodName) =>
  getSampleSolo([methodName, getFilteredMethodNames(objectId, methodName)]);

export default methods;
