const intCode = [
  1,
  0,
  0,
  3,
  1,
  1,
  2,
  3,
  1,
  3,
  4,
  3,
  1,
  5,
  0,
  3,
  2,
  10,
  1,
  19,
  1,
  5,
  19,
  23,
  1,
  23,
  5,
  27,
  2,
  27,
  10,
  31,
  1,
  5,
  31,
  35,
  2,
  35,
  6,
  39,
  1,
  6,
  39,
  43,
  2,
  13,
  43,
  47,
  2,
  9,
  47,
  51,
  1,
  6,
  51,
  55,
  1,
  55,
  9,
  59,
  2,
  6,
  59,
  63,
  1,
  5,
  63,
  67,
  2,
  67,
  13,
  71,
  1,
  9,
  71,
  75,
  1,
  75,
  9,
  79,
  2,
  79,
  10,
  83,
  1,
  6,
  83,
  87,
  1,
  5,
  87,
  91,
  1,
  6,
  91,
  95,
  1,
  95,
  13,
  99,
  1,
  10,
  99,
  103,
  2,
  6,
  103,
  107,
  1,
  107,
  5,
  111,
  1,
  111,
  13,
  115,
  1,
  115,
  13,
  119,
  1,
  13,
  119,
  123,
  2,
  123,
  13,
  127,
  1,
  127,
  6,
  131,
  1,
  131,
  9,
  135,
  1,
  5,
  135,
  139,
  2,
  139,
  6,
  143,
  2,
  6,
  143,
  147,
  1,
  5,
  147,
  151,
  1,
  151,
  2,
  155,
  1,
  9,
  155,
  0,
  99,
  2,
  14,
  0,
  0
];

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const resolveCases = input => {
  for (let i = 0; i < input.length; i += 4) {
    const pos1 = input[i + 1];
    const pos2 = input[i + 2];
    const pos3 = input[i + 3];
    if (input[i] === 1) {
      input[pos3] = add(input[pos1], input[pos2]);
    } else if (input[i] === 2) {
      input[pos3] = multiply(input[pos1], input[pos2]);
    } else if (input[i] === 99) {
      break;
    }
  }
};

const problem1 = () => {
  const input = [...intCode];
  input[1] = 12;
  input[2] = 2;
  resolveCases(input);
  return input[0];
};

const problem2 = () => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const input = [...intCode];
      input[1] = i;
      input[2] = j;
      resolveCases(input);
      if (input[0] === 19690720) {
        return console.log(i * 100 + j);
      }
    }
  }
};

console.log(problem1());
console.log(problem2());
