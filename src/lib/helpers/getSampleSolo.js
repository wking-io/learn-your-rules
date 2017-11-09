import sample from 'lodash.sample';

const getSampleSolo = input => (Array.isArray(input) ? getSampleSolo(sample(input)) : input);

export default getSampleSolo;
