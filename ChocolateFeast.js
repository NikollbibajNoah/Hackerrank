function chocolateFeast(n, c, m) {
    // Write your code here

    let result = 0;

    //Buy All possible
    result = Math.floor(n / c);

    let wrappers = result;

    while (wrappers >= m) {
        let temp = Math.floor(wrappers / m);
        result += temp;

        wrappers -= temp * m - temp;
    }
    
    return result;
}

console.log(chocolateFeast(15, 3, 2)); //9
console.log(chocolateFeast(7, 3, 2)); //3
console.log(chocolateFeast(10, 2, 5)); //6
console.log(chocolateFeast(12, 4, 4)); //3
console.log(chocolateFeast(6, 2, 2)); //5