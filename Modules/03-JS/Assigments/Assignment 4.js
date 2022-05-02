function tetra(n){  
    // your code
    const tetra = (n * (n + 1) * (n + 2)) / 6
    console.log(tetra)
    return tetra
}

console.log(tetra(2) === 4)
console.log(tetra(5) === 35)
console.log(tetra(6) === 56)