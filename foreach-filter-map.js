'use strict';

const tmp = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function myfilter(arr) {
  const newArr = arr.filter(e => {
    if (e[0] >= 0 && e[1] >= 0) return e;
  });
}
//myfilter(tmp);

function myMap(arr) {
  return arr.map(e => e[0] + e[1]);
}
//console.log(myMap(tmp));

function myForEach(arr) {
  const results = [];
  arr.forEach(e => {
    results.push(Math.abs(e[0]) + Math.abs(e[1]));
  });
  return results;
}
console.log(myForEach(tmp));
