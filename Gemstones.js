function gemstones(arr) {
    let gemstoneSet = new Set(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        gemstoneSet = new Set([...gemstoneSet]
            .filter(mineral => arr[i].includes(mineral)));
    }

    return gemstoneSet.size;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"])); ///2
console.log(gemstones(["basdfj", "asdlkjfdjsa", "bnafvfnsd", "oafhdlasd"])); ///4
console.log(gemstones(["vtrjvgbj", "mkmjyaeav", "sibzdmsk"])); ///0