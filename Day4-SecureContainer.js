const puzzleInput = "372037-905157";

let [start, end] = puzzleInput.split("-");
start = parseInt(start);
end = parseInt(end);

const checkForSameDigits = pass => {
  const myString = pass.toString();
  const digits = [...myString];
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};
const checkForIncrease = pass => {
  const myString = pass.toString();
  const digits = [...myString];
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] <= digits[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
const finalCheck = pass => {
  const myString = pass.toString();
  let searchItem = myString[0];
  let count = 1;
  for (let i = 1; i < myString.length; i++) {
    if (searchItem === myString[i]) {
      count++;
    } else {
      if (count === 2) {
        return true;
      } else {
        count = 1;
        searchItem = myString[i];
      }
    }
  }
  return count === 2;
};
const possiblePasswords = () => {
  const resultsProblem1 = [];
  const resultsProblem2 = [];
  for (let i = start; i < end; i++) {
    if (checkForIncrease(i)) {
      if (checkForSameDigits(i)) {
        resultsProblem1.push(i);
        if (finalCheck(i)) {
          resultsProblem2.push(i);
        }
      }
    }
  }
  console.log("Problem1: ", resultsProblem1.length);
  console.log("Problem2: ", resultsProblem2.length);
};

possiblePasswords();
