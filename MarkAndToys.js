function maximumToys(prices, k) {
    // Write your code here

    let count = 0;

    //sort prices
    prices.sort((a, b) => a - b);

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (k >= price) {
            k -= price;
            count++;
        } else {
            break;
        }
    }

    return count;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)); ///4
console.log(maximumToys([1, 2, 3, 4], 7 )); ///3
console.log(maximumToys([3, 7, 2, 9, 4], 15)); ///3