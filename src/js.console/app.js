const alert = require('alert-node');
const prompt = require('prompt-sync')();

const DEFAULT = '-ggggg';

const QUESTION = {
  1: 'How old are you?',
  2: 'What is your name?',
  [DEFAULT]: 'Go out!',
};

const ANSWER = {
  1: 'Marry',
  2: '5 years old',
  3: '10 years old',
  [DEFAULT]: "I don't get it",
};

function getValueFromStore(index, store) {
  if (store[index]) {
    return store[index];
  }

  return store[DEFAULT];
}

for (; ;) {
  const questionIndex = parseInt(prompt('Select next question (0 - exit) '), 10);
  const answerIndex = parseInt(prompt('Select next answer (0 - exit) '), 10);

  console.log(getValueFromStore(questionIndex, QUESTION));
  console.log(getValueFromStore(answerIndex, ANSWER));

  if (questionIndex === 0 || answerIndex === 0) {
    break;
  }
}
