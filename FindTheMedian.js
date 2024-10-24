function findMedian(arr) {
    // Write your code here

    let result;

    //Sort Array
    arr.sort((a, b) => a - b);

    //Check Even or Odd
    if (arr.length % 2 === 0) {
        let firstHalf = arr.length / 2;
        let lastHalf = firstHalf + 1;

        let temp = arr[firstHalf] + arr[lastHalf];

        result = temp / 2;
    } else {
        let half = Math.floor(arr.length / 2);

        result = arr[half];
    }

    return result;
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
console.log(findMedian([0, 1, 2, 4, 6, 5, 3, 1]));