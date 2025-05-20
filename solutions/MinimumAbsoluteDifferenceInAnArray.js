function minimumAbsoluteDifference(arr) {
    // Write your code here

    const n = arr.length;
    let lastValue = Infinity;

    for (let i = 0; i < n; i++) {
        const current = arr[i];

        for (let j = i + 1; j < n; j++) {
            const next = arr[j];

            const sub = Math.abs(current - next);

            if (sub < lastValue) {
                lastValue = sub;
            }
        }
    }

    return lastValue;
}

console.log(minimumAbsoluteDifference([3, -7, 0])); //3
console.log(minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])); //1
console.log(minimumAbsoluteDifference([1, -3, 71, 68, 17])); //3