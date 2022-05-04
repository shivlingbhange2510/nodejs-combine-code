const add = require('./add');
const substract = require('./substract');
const divided = require('./divided');
const multiply = require('./multiply');
let x=10, y=20;
console.log('add', add(x,y));
console.log('substract', substract(x,y));

console.log('divided', divided(x,y));
console.log('multiply', multiply(x,y));