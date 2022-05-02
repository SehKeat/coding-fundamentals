function factorial(anyNumber){  
    // your code
    let n = 1
    for (let i=1; i<=anyNumber; i++)
    {
        n *= i
    }
    console.log(n)
    return n
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)