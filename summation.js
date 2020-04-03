// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = (number) => {
  let counter = number;
  let sum = number;
  while(counter > 0){
    sum = sum + (counter -1)
    counter --;
  }
  return sum;
};