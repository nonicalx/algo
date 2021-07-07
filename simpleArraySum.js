/*
Given an array of integers, find the sum of its elements.

For example, if the array ar=[1,2,3] ,1+2+3 = 6 , so return 6 .

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

*/

function simpleArraySum(array) {
  let sum = array.reduce(
    (initialValue, currentValue) => initialValue + currentValue
  );

  return sum;
}

console.log(simpleArraySum([2,3,4,5,6]));