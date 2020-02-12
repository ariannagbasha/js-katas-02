# Assessment: JavaScript Katas 2

### Overview ###

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, and expressions through a series of katas.The functions start out trivial and ramp up in difficulty. The main goals of these katas are:
* get you used to writing and calling functions that take arguments and return results
* get you used to breaking down a problem into the various parts of a for loop
You will use the [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) keyword for the output of your function. Unlike other katas we've done up until now, most of these build on each other, which means that **you'll need to complete them in order.**

When giving constraints for the implementation, note that anything I say about functions also applies to methods (we'll talk about the difference soon).

### Add(1 points) ###

Write a function named "add" that takes two arguments and returns their sum.

You may use built-in operators to finish the definition.

For example, calling *add*(2, 4) should return a result of 6.

### Multiply(2 points) ###

Write a function named "multiply" that takes two arguments and returns their product.

You **may not** use built-in arithmetic operators or functions (like the * built-in operator for multiplication). Instead, you'll need a for loop which calls the "add" function you wrote earlier.

For example, calling *multiply*(6, 8) should return a result of 48.

### Power(2 points) ###

Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.

You **may not** use built-in arithmetic operators or functions (like the * built-in operator for multiplication, or the ** operator for power/exponentiation). Instead, use functions you wrote in earlier katas to write this function.

Another word for this is "exponentiation". For example, if we called *power*(2, 8), we return 256 by multiplying 2 by itself 8 times:

```js
    2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
```
If we had called *power*(3, 4), we'd want to multiply 3 by itself 4 times:

```js
    3 * 3 * 3 * 3 = 81
```
See [this] Wikipedia article for more details on exponentiation.

### Factorial(2 points) ###

Write a function named "factorial" that takes a single argument and returns the factorial of that argument .

You **may not** use built-in arithmetic operators (like the * built-in operator for multiplication) or functions. Instead, use functions you wrote in earlier katas to write this function.

For example, calling *factorial*(4) should return a result of 24.

### Hint(2 points) ###

1. The answer to most of these will look similar. They will typically involve:
* declaring a variable to keep track of a final result
* writing a for loop to consistently modify the result
* returning the result

2. If you struggle for more than 5 minutes, **ask for help!** This is an exercise in critical thinking, not torture.

### Fibonacci(3 points) ###
Write a function named "fibonacci" that takes an argument n and returns the nth [Fibonacci](https://simple.wikipedia.org/wiki/Fibonacci_number) number.

You **may not** use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function (like the * built-in operator for multiplication).

For example, calling *fibonacci*(8) should return a result of 13.

0 1 1 2 3 5 8 (13) 21

The number in parentheses is the 8th fibonacci number.

### Submission ###

Push your code into your GitLab repository and deploy it via GitLab pages. In Canvas, **please submit your Gitlab Repo url, and in the comments your Gitlab [Pages](https://ariannagbasha.gitlab.io/js-katas-02/)** and in GitLab add KA_grading as a member on your project with "Reporter" permission.




