const quizTypes = [
  {
    name: 'Multiple Choice',
    questionTitle: 'Choose the method that solves the problem below:',
    quizId: 'mc',
    showSubmit: false,
  },
  {
    name: 'True / False',
    questionTitle: 'The method used below IS correct:',
    quizId: 'tf',
    showSubmit: false,
  },
  {
    name: 'Fill In The Blank',
    questionTitle: 'Enter the missing method in the input field below:',
    quizId: 'fb',
    showSubmit: true,
  },
];

export default quizTypes;
