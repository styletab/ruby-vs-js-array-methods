'use strict';

 let loadPeople = require('../lib/people.js');
//
// loadPeople().then((people) => {
//   let count = people.reduce((m /*, p */) => m + 1, 0);
//   console.log(`count: ${count}, length: ${people.length}`);
// }).catch((error) => console.log(error));


loadPeople().then((people) => {
  // people is an array of objects
  //count total number of ppl
  console.log('Total people (length property): ', people.length);

const increment = (accumulator) => {
  return accumulator + 1;
};

const isFemale = (person) => {
  return person.gender === 'f';
};

 let femaleCount = people.filter(isFemale).reduce(increment, 0);

 console.log('total females (using reduce): ', femaleCount);

const isMale = (person) => {
  return person.gender === 'm';
};

  let maleCount = people.filter(isMale).reduce(increment, 0);
  //people.filter(!isFemale).reduce(increment, 0); // WRONG
  // this doesn't answer the question How many males? it answers how many not
  // females?
  // also syntax error

  console.log('total males (using reduce): ', maleCount);

// Count all the people who are older than you (or just pick an age).

const isOlder = (person) => {
  return person.age() > 25;
};

let countOfOlder = people.filter(isOlder).reduce(increment, 0);

console.log('Total ppl over 25 (using reduce) ', countOfOlder);



 // Count all the people who are younger than you (or just pick an age).

 const isYounger = (person) => {
   return person.age() <= 25;
 };

 let countOfYounger = people.filter(isYounger).reduce(increment, 0);

 console.log('Total ppl under 25 (using reduce) ', countOfYounger);


 // Count all the people whose first name and last name start with the
 // same letter.

const sameLetter = (person) => {
  return person.given_name[0] === person.surname[0];
};

let sameName = people.filter(sameLetter).reduce(increment, 0);

console.log('Total ppl with same letter name ', sameName);

// Calculate the average age of all the people.

const ageToday = (person) => {
   return person.age();
};

const sumAge = (previous, currentPerson) => {
  return previous + currentPerson.age();
};

let getAvgAge = people.filter(ageToday).reduce(sumAge, 0) / people.length;

console.log('Avg age is ', getAvgAge);









  }).catch((error) => console.log(error));
