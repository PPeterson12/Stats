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

const numbers = [4, 7, 2, 5, 1];
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
//console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
//console.log(`The largest of your numbers is ${getMax(numbers)}.`);
//console.log(`The range of your numbers is ${getRange(numbers)}.`);
//console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
//console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
