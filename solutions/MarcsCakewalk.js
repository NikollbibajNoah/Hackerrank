function marcsCakewalk(calorie) {
    // Write your code here

    const n = calorie.length;
    let sum = 0;

    calorie.sort((a, b) => a - b).reverse();

    for (let i = 0; i < n; i++) {
        const c = calorie[i];
        
        if (i == 0){
            sum += c;
        } else {
            let power = 2 ** i;

            sum += c * power;
        }
    }

    return sum; 
}

console.log("Output: " + marcsCakewalk([1, 3, 2])) //11 
console.log("Output: " + marcsCakewalk([7, 4, 9, 6])) //79