function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null parameters are not allowed.');
  }
  // ...rest of the function...
}

foo(null, 1); //This will throw an error
foo(1, null); //This will throw an error
foo(null, null); //This will throw an error