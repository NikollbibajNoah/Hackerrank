
//Removes Substring of given String
function RemoveCharsFromString(string, start, length) {
    const p1 = string.slice(0, start);
    const p2 = string.slice(start + length);

    return p1 + p2;
}


function superReducedString(s) {
    // Write your code here

    for (let i = 0; i < s.length; i++) {
        const current = s[i];

        if (i + 1 < s.length) {
            const next = s[i + 1];

            if (current === next) {
                s = RemoveCharsFromString(s, i, 2);

                i = -1; //Start from beginning
            }
        }  
    }

    if (s === "") {
        return "Empty String";
    }

    return s;
}

console.log(superReducedString("aaabccddd")); //abd
console.log(superReducedString("aa")); //Empty String
console.log(superReducedString("baab")); //Empty String