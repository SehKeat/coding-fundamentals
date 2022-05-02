function sum(numbersArray){  
    // your code
    const sum = (numbersArray).reduce((a, b) => a + b, 0)
    return sum
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10)
console.log(sum([-3, 5, 19, -6]) === 15)

