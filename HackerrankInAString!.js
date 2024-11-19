function hackerrankInString(s) {
    // Write your code here

    const desired = "hackerrank";
    const n = s.length;
    let result = "";
    let pos = 0;

    for (let i = 0; i < n; i++) {
        const current = s[i];

        if (desired[pos] === current) {
            pos++;
            result += current;
        }
    }

    if (result === desired) {
        return "YES";
    }

    return "NO";
}

console.log(hackerrankInString("hereiamstackerrank")); //YES
console.log(hackerrankInString("hackerworld")); //NO
console.log(hackerrankInString("hhaacckkekraraannk")); //YES
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt")); //NO