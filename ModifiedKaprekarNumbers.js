function kaprekarNumbers(p, q) {
    // Write your code here
    let arr = []

    if(p <= 1) arr.push(1)

    for(let i = p; i <= q; i++){
        let square = String(i * i);
        let second = square.slice(square.length / 2, square.length);
        parseInt(first) + parseInt(second) == i && arr.push(i);
    }
    arr.length > 0 ? console.log(arr.toString().split(',').join(' ')) : console.log("INVALID RANGE");
}

kaprekarNumbers(1, 100); //1, 9, 45, 55, 99
kaprekarNumbers(100, 300); //297
kaprekarNumbers(1, 10000); //297