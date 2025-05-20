function bigSorting(unsorted) {
    // Write your code here

    return unsorted
    .map(value => BigInt(value)) //Convert from string to big int
    .sort((a, b) => (a > b ? 1 : -1)); //sort ascending
}

console.log(bigSorting([31415926535897932384626433832795,
    1,
    3,
    10,
    3,
    5,])); //1, 3, 3, 5, 10, 31424...
console.log(bigSorting([1,
    2,
    100,
    111,
    200,
    3084193741082937,
    3084193741082938,
    12303479849857341718340192371])); //2, 100, 111, 200, 30844...