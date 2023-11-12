function getLength(arr) {
  return arr;
}

function getSum(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function getMean(arr) {
  mean = 0;
  for (let i = 0; i < arr.length; i++) {
    mean = (arr[i] + sum) / 5;
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

const numbers = [4, 7, 1, 5, 3];
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
//console.log(`The range of your numbers is ${getRange(numbers)}.`);
//console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
//console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
