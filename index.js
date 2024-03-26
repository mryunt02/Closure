function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer(); // we have access to the inner function incrementCounter = (closure)
myNewFunction(); // counter=1
myNewFunction(); // counter=2

//Web Browser Features:
// console();
// fetch();
// document;
// setTimeout();
// for instance
setTimeout(() => {
  console.log("Hello World");
}, 1000);
console.log("Me first!");
