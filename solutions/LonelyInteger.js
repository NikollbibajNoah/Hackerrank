function lonelyinteger(a) {
    // Write your code here

    //Simpler Version
    return a.reduce((a, b) => a ^ b);

    // const n = a.length;
    // let result;

    // //Result is single item in array
    // if (n === 1) {
    //     return a[0];
    // }

    // for (let i = 0; i < n; i++) {
    //     const current = a[i];

    //     let pairs = [current];
    //     for (let j = 0; j < n; j++) {
    //         if (j === i) continue;
    //         const value = a[j];

    //         //If second equal value found of pairs
    //         if (value === current) {
    //             pairs.push(value);
    //             break;
    //         }
    //     }

    //     //If no pair found then result found
    //     if (pairs.length === 1) {
    //         result = pairs[0];

    //     }
    // }

    // return result;
}

// console.log(lonelyinteger([1])); //1
console.log(lonelyinteger([1, 1, 2])); //2
console.log(lonelyinteger([0, 0, 1, 2, 1])); //2