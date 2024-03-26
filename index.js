function outer() {
  debugger;
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer(); // we have access to the inner function incrementCounter = (closure)
myNewFunction(); // logs 1
myNewFunction(); // logs 2
