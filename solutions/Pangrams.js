function pangrams(s) {
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    let found = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < abc.length; j++) {
            if (s.charAt(i).toLowerCase() === abc[j]) {
                found.push(abc[j]);

                abc.splice(j, 1);
            }
        }
    }

    if (abc.length == 0) {
        return "pangram";
    }

    return "not pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize")) //pangram
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); //not pangram