import find from '../../helpers/find';
import arrayObject from './arrayObject';
import stringObject from './stringObject';

const objects = [arrayObject, stringObject];

export const getQuizObject = find(objects, 'id');
export const getQuizTheme = objectId => getQuizObject(objectId).color;
export default objects;
