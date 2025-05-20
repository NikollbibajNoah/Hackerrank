function alternatingCharacters(s) {
    // Write your code here

    let count = 0;
    let lastStep;

    for (let i = 0; i < s.length; i++) {

        //Check for last step
        if (lastStep != null) {
            i = lastStep;
        }

        const current = s[i];
        
        if (i + 1 < s.length) {
            const next = s[i + 1];

            if (next === current) {
                s = RemoveChar(s, i + 1);
                count++;
                lastStep = i; //previous
            } else {
                lastStep = null;
            }
        }
    }

    return count;
}

///Removes character from string at given position
function RemoveChar(s, pos) {
    let p1 = s.substring(0, pos);
    let p2 = s.substring(pos + 1, s.length);

    return p1 + p2;
}

console.log(alternatingCharacters("AAAA")); //3
console.log(alternatingCharacters("BBBBB")); //4
console.log(alternatingCharacters("ABABABAB")); //0
console.log(alternatingCharacters("BABABA")); //0
console.log(alternatingCharacters("AAABBB")); //4