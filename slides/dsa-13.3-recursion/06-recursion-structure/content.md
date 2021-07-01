# Structure of recursive functions

* Recursive functions split problems into two sets of cases:
    * The base cases:
        * The stopping conditions
    * The recursive cases:
        * The continuing conditions
        * The function calls itself to solve a smaller subtask
        * Those solutions are combined to solve the complete problem
        * Eventually, all recursive calls must *converge* to reach one of the base cases
* What happens when you forget the base case, or a recursive call doesn't converge?
    * Infinite recursion: the function will never complete
