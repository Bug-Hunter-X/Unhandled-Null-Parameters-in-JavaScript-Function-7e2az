# Unhandled Null Parameters in JavaScript Function

This repository demonstrates a common, yet subtle bug in JavaScript: unexpected behavior when null values are passed as parameters to a function.

## The Bug
The `foo` function in `bug.js` doesn't explicitly handle cases where either `a` or `b` is `null`.  While the code has a check for null, the function simply returns without raising an error or providing any clear indication of the problem.  This silent failure can lead to unexpected results in applications.

## The Solution
The `bugSolution.js` file demonstrates a corrected version of the `foo` function. It explicitly handles `null` values by throwing a more informative error, making the error clear and easily debuggable.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to see the faulty code.
3. Run `bug.js` and observe the lack of any error output despite passing null values.
4. Open `bugSolution.js` to see the improved code. 
5. Run `bugSolution.js`, and you'll see an error message clearly indicating the presence of null values.

This example highlights the importance of robust null handling in JavaScript functions to prevent unexpected behavior and silent errors.