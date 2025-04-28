function countingSort(arr) {
    // Write your code here

    let result = Array(100).fill(0);
    let freq = {};
    
    //Create Frequency Map
    arr.map((value) => {
        if (freq[value] === undefined) {
            freq[value] = 1;
        } else {
            freq[value]++;
        }
    })

    //Apply Frequency Map to Result
    arr.map((value) => {
        result[value] = freq[value];
    });

    let sorted = [];
    for (let i = 0; i < result.length; i++) {
        const current = result[i];

        if (current > 0) {
            //Check if number appears more than once
            for (let j = 0; j < current; j++) {
                sorted.push(i);

            }
        }
    }

    return sorted;
}

console.log(countingSort([1, 1, 3, 2, 1])); //0, 3, 1, 1
console.log(countingSort([19, 10, 12, 10, 24, 25, 22])); //10 10 12 19 22 24 25
console.log(countingSort([63, 25, 73, 1, 98, 73, 56, 84])); //0 2 0 2 0 0 1 0