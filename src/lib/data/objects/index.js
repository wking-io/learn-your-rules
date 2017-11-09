import find from '../../helpers/find';
import arrayObject from './arrayObject';

const objects = [arrayObject];

export const getQuizObject = find(objects, 'id');
export default objects;
