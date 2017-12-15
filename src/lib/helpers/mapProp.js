import * as R from 'ramda';

const mapProp = prop => R.map(R.prop(prop));
export default mapProp;
