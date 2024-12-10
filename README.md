# TypeScript Array Assignment Error

This example demonstrates a common TypeScript error that occurs when an array is passed as an argument to a function expecting a single string.  The code includes a function `greeter` that takes a string and returns a greeting, and then attempts to pass an array of strings to this function which causes a type error.

The solution demonstrates how to correctly handle this scenario by either iterating over the array and calling the function for each element or modifying the function signature to accept an array.