/*
Intuition
The problem requires us to determine if the given string of brackets is valid or not. We can use a stack data structure to keep track of opening brackets encountered and check if they match with the corresponding closing brackets.

Approach
Here is the step-by-step approach of the algorithm:

Initialize an empty stack.

Traverse the input string character by character.

If the current character is an opening bracket (i.e., '(', '{', '['), push it onto the stack.

If the current character is a closing bracket (i.e., ')', '}', ']'), check if the stack is empty. If it is empty, return false, because the closing bracket does not have a corresponding opening bracket. Otherwise, pop the top element from the stack and check if it matches the current closing bracket. If it does not match, return false, because the brackets are not valid.

After traversing the entire input string, if the stack is empty, return true, because all opening brackets have been matched with their corresponding closing brackets. Otherwise, return false, because some opening brackets have not been matched with their corresponding closing brackets.

Complexity
Time complexity:
The time complexity of the solution is O(n)O(n)O(n), where n is the length of the input string. This is because we traverse the string once and perform constant time operations for each character.

Space complexity:
The space complexity of the solution is O(n)O(n)O(n), where n is the length of the input string. This is because the worst-case scenario is when all opening brackets are present in the string and the stack will have to store them all.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid
var isValid = function (s) {
  let check = false;
  const stack = [];
  s.split("").forEach((c) => {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (
        (c === ")" && stack[stack.length - 1] === "(") ||
        (c === "{" && stack[stack.length - 1] === "}") ||
        (c === "[" && stack[stack.length - 1] === "]")
      )
        check = true;
    }
  });
  return check;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
