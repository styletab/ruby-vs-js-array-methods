'use strict';
//  Lab: Fibonacci Calculations
//
// Alternating between Ruby and JavaScript, write scripts, in bin/fibonacci.rb and bin/fibonacci.js, that:
//


// calculates the product of the even elements of fibs(excluding zero).





let fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

const product = (a,b) => {
  if (a > 0) {
  return a * b;
} else {
  return b * 1;
}
};

let productFibs = fibs.reduce(product, 0);

console.log("The product of the fib numbers is", productFibs);


// sum of all the elemetns of fibs array
const sum = (a,b) => {
  return a + b;
};

let sumFibs = fibs.reduce(sum, 0);

console.log("The sum of the fib numbers is", sumFibs);

// calculates the sum of the odd elements of fibs

const isOdd = function(i) {
  return (i %2 !== 0)
};

let sumIsOdd = fibs.filter(isOdd).reduce(sum, 0);

console.log("The odd sum of the fib numbers is", sumIsOdd);

// calculates the product of elements of fibs (excluding zero).

const isEven = function(i) {
  return (i %2 === 0)
};

let productIsEven = fibs.filter(isEven).reduce(product, 1);
console.log("The even sum of the fib numbers is", productIsEven);
