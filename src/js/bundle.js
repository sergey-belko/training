function sum(a, b) {
  return a + b;
}

console.log('Simple sum', sum(1, 1));

function sumCarrable(a) {
  return b => a + b;
}

console.log('Carrable sum', sumCarrable(2)(1));

const estimate = sumCarrable(2);

console.log('Carrable sum estimate 1', estimate(1));
console.log('Carrable sum estimate 2', estimate(2));


function tooManyArgs(a, b, c, d) {
  return a + b + c + d;
}

function lessArgs(obj) {
  return obj.a + obj.b + obj.c + obj.d;
}

console.log(tooManyArgs(1, 2, 3, 4));
console.log(lessArgs({
  a: 1, b: 2, c: 3, d: 4,
}));

console.log('Finish');
