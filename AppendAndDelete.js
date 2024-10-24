function appendAndDelete(s, t, k) {
    if (k >= t.length + s.length) return "Yes";

    let equal = Math.min(t.length, s.length);
    const n = equal;

    for (let i = 0; i < n; i++) {
        if (s.charAt(i) != t.charAt((i))) { ///Check if Equal
            equal = i;
            break;
        }
    }

    k -= s.length - equal;
    k -= t.length - equal;

    return (k >= 0 && k % 2 == 0) ? "Yes" : "No";
}
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); ///YES
// console.log(appendAndDelete("aba", "aba", 7)); ///YES
// console.log(appendAndDelete("ashley", "ash", 2)); ///NO

// console.log(appendAndDelete("y", "yu", 2)); ///NO
