function balancedSums(arr) {

    const n = arr.length;

    let leftSum = 0;
    const totalSum = arr.reduce((acc, val) => acc + val, 0); //Max Sum of array

    for (let i = 0; i < n; i++) {
        const current = arr[i];
        const rightSum = totalSum - leftSum - current;

        if (leftSum === rightSum) {
            return 'YES';
        }

        leftSum += current;
    }

    return 'NO';
}

console.log(balancedSums([1, 2, 3])); // NO
console.log(balancedSums([1, 2, 3, 3])); // YES
console.log(balancedSums([1, 1, 4, 1, 1])); // YES
console.log(balancedSums([2, 0, 0, 0])); // YES
console.log(balancedSums([0, 0, 2, 0])); // YES
