import sampleSize from 'lodash.samplesize';
import shuffle from 'lodash.shuffle';
import * as R from 'ramda';
import getSampleSolo from '../../helpers/getSampleSolo';
import getRandomDifference from '../../helpers/getRandomDifference';
import mapProp from '../../helpers/mapProp';
import array from './arrayMethods';
import string from './stringMethods';

// getNames :: [Objects] -> [String]
const getNames = mapProp('name');

// find :: ([Object], key) -> a -> Object
const find = (arr, prop) => val => arr.find(method => method[prop] === val);

// getFilteredMethodNames :: String -> [Objects] -> [String]
const getFilteredMethodNames = methodName =>
  R.compose(getNames, R.reject(R.propEq('name', methodName)));

export const setupQuizObject = id => {
  const allMethods = {
    array,
    string,
  };

  // getMultipleChoiceAnswers :: [Object] -> String -> [String]
  const getMultipleChoiceAnswers = R.curry((methods, methodName) => {
    return R.compose(
      shuffle,
      R.concat([methodName]),
      R.partialRight(sampleSize, [3]),
      getFilteredMethodNames(methodName)
    )(methods);
  });

  // getRandomMethod :: [Object] -> String -> String
  const getRandomMethod = R.curry((methods, methodName) => {
    return R.compose(
      getSampleSolo,
      R.prepend(methodName),
      R.aperture(3),
      R.partialRight(sampleSize, [3]),
      getFilteredMethodNames(methodName)
    )(methods);
  });

  return {
    methods: allMethods[id],
    getNextMethod: R.compose(
      find(allMethods[id], 'name'),
      getRandomDifference(getNames(allMethods[id]))
    ),
    getMultipleChoiceAnswers: getMultipleChoiceAnswers(allMethods[id]),
    getRandomMethod: getRandomMethod(allMethods[id]),
  };
};

export default setupQuizObject;
