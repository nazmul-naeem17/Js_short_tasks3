const Calculate = {
  sum: function (...nums) {
    let result = nums[0]; // Initialize result to the first number
    for (let i = 1; i < nums.length; i++) {
      // Start loop from index 1
      result += nums[i];
    }
    return result;
  },
  subtract: function (...nums) {
    let result = nums[0]; // Initialize result to the first number
    for (let i = 1; i < nums.length; i++) {
      // Start loop from index 1
      result -= nums[i];
    }
    return result;
  },
  multiply: function (...nums) {
    let result = nums[0]; // Initialize result to the first number
    for (let i = 1; i < nums.length; i++) {
      // Start loop from index 1
      result *= nums[i];
    }
    return result;
  },
  divide: function (...nums) {
    if (nums.includes(0)) {
      return "Error: Division by zero";
    }
    let result = nums[0]; // Initialize result to the first number
    for (let i = 1; i < nums.length; i++) {
      // Start loop from index 1
      result /= nums[i];
    }
    return result.toFixed(2); // Correct typo: toFixed() with lowercase 't'
  },
};

// Example usage:
const numstoadd = [1, 2, 3, 4, 5];
const sumResult = Calculate.sum(...numstoadd);
console.log(`Sum: ${sumResult}`);

const numstosub = [10, 5, 2];
const subtractResult = Calculate.subtract(...numstosub);
console.log(`Subtraction: ${subtractResult}`);

const numstomul = [2, 3, 4];
const multiplicationResult = Calculate.multiply(...numstomul);
console.log(`Multiplication: ${multiplicationResult}`);

const numstodiv = [20, 2, 2];
const divideResult = Calculate.divide(...numstodiv);
console.log(`Division: ${divideResult}`);
