import questionTemplate from '../../helpers/questionTemplate';

const arrayMethods = [
  {
    id: 'map',
    name: 'map',
    description:
      'A method that transforms each element in the array by applying the passed in function to each individual element in the array. This method is a non-mutating method and returns a brand new array each time it is called.',
    referenceUrl:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
    questions: [
      questionTemplate`const numbers = [2, 4, 6, 8];
const result = numbers.${''}(number => number * 2);
// result = [4, 8, 12, 16];`,
    ],
  },
  {
    id: 'filter',
    name: 'filter',
    description:
      'A method that transforms each element in the array by applying the passed in function to each individual element in the array. This method is a non-mutating method and returns a brand new array each time it is called.',
    referenceUrl:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = people.${''}(person => person.age < 40);
// result = [ { name: 'andrew', age: 24 }, { name: 'wilson', age: 34 } ];`,
    ],
  },
  {
    id: 'find',
    name: 'find',
    description:
      'A method that transforms each element in the array by applying the passed in function to each individual element in the array. This method is a non-mutating method and returns a brand new array each time it is called.',
    referenceUrl:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = people.${''}(person => person.name === 'andrew');
// result = { name: 'andrew', age: 24 };`,
    ],
  },
  {
    id: 'sort',
    name: 'sort',
    description:
      'A method that transforms each element in the array by applying the passed in function to each individual element in the array. This method is a non-mutating method and returns a brand new array each time it is called.',
    referenceUrl:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = people.${''}((a, b) => a.age < b.age);
// result = [ 
//   { name: 'andrew', age: 24 }, 
//   { name: 'wilson', age: 34 },
//   { name: 'jerry', age: 53 },
//   { name: 'jake', age: 72 }
// ];`,
    ],
  },
  {
    id: 'every',
    name: 'every',
    description:
      'A method that transforms each element in the array by applying the passed in function to each individual element in the array. This method is a non-mutating method and returns a brand new array each time it is called.',
    referenceUrl:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = people.${''}(person => person.age < 40);
// result = false;`,
    ],
  },
  {
    id: 'reduce',
    name: 'reduce',
    description:
      'A method that transforms each element in the array by applying the passed in function to each individual element in the array. This method is a non-mutating method and returns a brand new array each time it is called.',
    referenceUrl:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
    questions: [
      questionTemplate`const people = [
  { name: 'jerry', age: 53 }, 
  { name: 'andrew', age: 24 }, 
  { name: 'jake', age: 72 },
  { name: 'wilson', age: 34 }
];
const result = people.${''}(sum, person => person.age + sum, 0);
// result = 183;`,
    ],
  },
];

export default arrayMethods;
