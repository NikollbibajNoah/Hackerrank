function stringConstruction(s) {
    // Write your code here

    let copy = "";
    let cost = 0;

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (!copy.includes(current)) {
            cost++;
        }

        copy += current;
    }

    return cost;
}

console.log(stringConstruction("abcd")) //4
console.log(stringConstruction("abab")) //2
console.log(stringConstruction("scfg")) //4
console.log(stringConstruction("bccb")) //2