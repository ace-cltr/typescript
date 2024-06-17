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

function helloWorld(name: () => void) {
  console.log("hello have a great day");
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

// interface in ts :-

interface User {
  name?: string;
  age: number;
}

function takeObj(user: User) {
  if (user.age > 18) {
    console.log("you can vote" + user.name);
  }
}

takeObj({ name: "anand", age: 19 });

function takeArr(arr: number[]) {
  console.log(arr);
}

takeArr([1, 3, 5, 3]);
