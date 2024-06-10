let x = "hello";

console.log(x + "friend");

// defining function type in typescript
function takeInput(age: number) {
  console.log(age);
}
takeInput(22);

// defining function return type in typescript
// this extra work is worth it for later on we
// can just hover on the function and see what
// type of values does it expects and returns

function twoSum(a: number, b: number): number {
  return a + b;
}

// another example
function isLegal(age: number): boolean {
  if (age > 18) return true;
  else return false;
}

// type of a function is :- ()=> void
function taker(func: () => void) {
  setTimeout(func, 1000);
}

taker(function () {
  console.log("hello from inner function");
});

// typescript provides some basic type :-
// number, string, boolean, null, undefined
