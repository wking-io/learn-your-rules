const questionTemplate = ([beforeMethod, afterMethod]) => (value = '________') =>
  beforeMethod + value + afterMethod;

export default questionTemplate;
