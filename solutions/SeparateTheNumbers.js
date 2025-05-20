function separateNumbers(s) {

    const n = s.length;
    let result;
    
    for (let i = 1; i < n; i++) {
        let firstNumber = BigInt(s.slice(0, i)); //For Big Integers cases
        let sequence = firstNumber.toString();
        let nextNumber = firstNumber;

        while (sequence.length < n) {
            nextNumber += 1n; //Adding right int type
            sequence += nextNumber.toString();
        }

        if (sequence === s) {
            result = firstNumber;
            break;
        }
    }

    //Set right output
    if (result != null) {
        console.log("YES " + result);
    } else {
        console.log("NO");
    }
}

console.log(separateNumbers("1234")); //yes 1
console.log(separateNumbers("91011")); //yes 9
console.log(separateNumbers("99100")); //yes 99
console.log(separateNumbers("101103"));  //No
console.log(separateNumbers("010203")); //No
console.log(separateNumbers("13")); //No
console.log(separateNumbers("1")); //No