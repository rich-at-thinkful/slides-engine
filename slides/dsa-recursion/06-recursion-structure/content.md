# Recursive function structure

* All recursive functions have two different conditions to deal with
    * The base cases:
        * The stopping conditions
    * The recursive case:
        * The continuing condition
        * In this case, the function calls itself to solve a smaller problem then use that solution to solve the complete problem.
* What happens when you forget the base case?
    * Forgetting the base case will result in infinite recursion and the function will never complete
* Each recursive calls address a subtask that is smaller than the previous
* These recursive calls converge to the base case
{.small}
