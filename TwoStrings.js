function twoStrings(s1, s2) {
    // Write your code here

    let result = "NO";
    const n = s1.length;

    for (let i = 0; i < n; i++) {
        const current = s1[i];

        if (s2.includes(current)) {
            result = "YES";
            break;
        }
    }

    return result;
}

console.log(twoStrings("hello", "world")) //YES 
console.log(twoStrings("hi", "world")) //NO 
console.log(twoStrings("hi", "world")) //NO 
console.log(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc")) //NO 
console.log(twoStrings("hackerrankcommunity", "cdecdecdecde")) //YES 