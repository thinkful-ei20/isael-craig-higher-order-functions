// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
'use strict';

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean  
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(myNames[i]) === true) {
      newArr.push(arr[i]);
    }
    //console.log(fn(myNames[i]));
  }
  return newArr;
}
