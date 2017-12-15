import sample from 'lodash.sample';
import * as R from 'ramda';

// getRandomDifference :: [a] -> [a] -> a
const getRandomDifference = list => R.compose(sample, R.difference(list));
export default getRandomDifference;
