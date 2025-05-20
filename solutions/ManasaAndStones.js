function stones(n, a, b) {
    // Write your code here

    let results = [];

    //Loop through all stones
    for (let i = 0; i < n; i++) {
        
        let val = i * a + (n - 1 - i) * b;

        //Check Duplicates
        if (!results.includes(val)) {
            results.push(val);
        }
    }

    return results.sort((a, b) => a - b);
}

console.log(stones(3, 1, 2)) //[2, 3, 4]
console.log(stones(4, 10, 100)) //[30, 120, 210, 300]