module.exports = function check(str, bracketsConfig) {
  // your solution
  const stack = [];
  const bracketsMap = {};
  const openBrackets = new Set();
	
  for (const [open, close] of bracketsConfig) {
    bracketsMap[close] = open;
    openBrackets.add(open);
  }

  for (const char of str) {
    if (openBrackets.has(char)) {
      if (bracketsMap[char] === char) {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        stack.push(char);
      }
    } else {
      if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
