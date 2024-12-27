function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  // ...rest of the function...
}

foo(null, 1); //This will not throw an error
foo(1, null); //This will not throw an error
foo(null, null); //This will not throw an error