import questionTemplate from '../../helpers/questionTemplate';

const arrayMethods = [
  {
    name: 'map',
    description: '',
    questions: [
      questionTemplate`const numbers = [2, 4, 6, 8];
const result = numbers.${''}(number => number * 2);
// result = [4, 8, 12, 16];`,
    ],
  },
  {
    name: 'filter',
    description: '',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = names.${''}(name => name.age < 40);
// result = [ { name: 'andrew', age: 24 }, { name: 'wilson', age: 34 } ];`,
    ],
  },
  {
    name: 'find',
    description: '',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = names.${''}(name => name.age < 40);
// result = [ { name: 'andrew', age: 24 }, { name: 'wilson', age: 34 } ];`,
    ],
  },
  {
    name: 'sort',
    description: '',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = names.${''}(name => name.age < 40);
// result = [ { name: 'andrew', age: 24 }, { name: 'wilson', age: 34 } ];`,
    ],
  },
  {
    name: 'every',
    description: '',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = names.${''}(name => name.age < 40);
// result = [ { name: 'andrew', age: 24 }, { name: 'wilson', age: 34 } ];`,
    ],
  },
  {
    name: 'reduce',
    description: '',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = names.${''}(name => name.age < 40);
// result = [ { name: 'andrew', age: 24 }, { name: 'wilson', age: 34 } ];`,
    ],
  },
];

export default arrayMethods;
