function icecreamParlor(m, arr) {
    // Write your code here

    const n = arr.length;

    let prices = [];

    for (let i = 0; i < n; i++) {
        const current = arr[i];

        for (let j = i + 1; j < n; j++) {
            const next = arr[j];

            if (current + next == m) {
                prices = [i + 1, j + 1];
            }
        }
    }

    return prices;
}

console.log(icecreamParlor(4, [1, 4, 5, 3, 2])); //[1 4]
console.log(icecreamParlor(4, [2, 2, 4, 3])); //[1 2]
console.log(icecreamParlor(9, [1, 3, 4, 6, 7, 9])); //[2 4]
console.log(icecreamParlor(8, [1, 3, 4, 4, 6, 8])); //[3 4]
console.log(icecreamParlor(3, [1, 2])); //[1 2]