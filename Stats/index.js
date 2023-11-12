function getLength(numbers) {
  return numbers;
}

function getSum(numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }

  return sum;
}

function getMean(numbers) {
  mean = 0;
  for (let i = 0; i < numbers.length; i++) {
    mean = (numbers[i] + sum) / 8;
  }
  return mean;
}

function getMin(numbers) {
  min = 0;
  {
    min = Math.min(...numbers);
  }
  return min;
}

function getMax(numbers) {
  max = 0;
  {
    max = Math.max(...numbers);
  }
  return max;
}

function getRange(numbers) {
  range = 0;
  {
    range = max - min;
  }
  return range;
}
function getEvens(numbers) {
  let even = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) even.push(numbers[i]);
  }
  return even;
}

function getOdds(numbers) {
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) odd.push(numbers[i]);
  }
  return odd;
}

const numbers = [4, 7, 8, 5, 3, 2, 1, 10];

console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
