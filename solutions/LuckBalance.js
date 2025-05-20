//Sorts a 2D Array
function sort2DArray(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


function luckBalance(k, contests) {
    // Write your code here

    let important = [];
    let notImportant = [];
    let result = 0;

    for (let i = 0; i < contests.length; i++) {
        const isImportant = contests[i][1] === 1;

        if (isImportant) {
            important.push(contests[i]);
        } else {
            result += contests[i][0];
        }
    }

    //Remove lowest points of contest
    if (k < important.length) {
        important.sort(sort2DArray);

        const diff = important.length - k;

        notImportant = important.slice(0, diff);
        important.splice(0, diff);
    }

    //Add to result
    for (let i in important) {
        const value = important[i][0];

        result += value;
    }

    //Sub from result
    for (let i in notImportant) {
        const value = notImportant[i][0];

        result -= value;
    }

    
    return result;
}

console.log(luckBalance(3, [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]])); //29
console.log(luckBalance(5, [[13, 1], [10, 1], [9, 1], [8, 1], [13, 1], [12, 1], [18, 1], [13, 1]])); //42
console.log(luckBalance(2, [[5, 1], [4, 0], [6, 1], [2, 1], [8, 0]])); //21