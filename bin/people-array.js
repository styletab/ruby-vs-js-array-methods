'use strict';

// let loadPeople = require('../lib/people.js');
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
  let count = people.reduct(increment, 0);

  console.log('total ppl (using reduce): ', count);

});
