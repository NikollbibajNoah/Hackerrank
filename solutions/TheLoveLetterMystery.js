function theLoveLetterMystery(s) {
    // Write your code here
    let count = 0;
    let c = 0;
    let d = s.length-1;

    while(c < d){
        let k = s.charCodeAt(c);
        let l  =s.charCodeAt(d); 
        count += Math.abs(l-k); 
        c++;
        d--;
    }       

    return count;
}

console.log(theLoveLetterMystery("abc")); //2
console.log(theLoveLetterMystery("abcba")); //0
console.log(theLoveLetterMystery("abcd")); //4
console.log(theLoveLetterMystery("cba")); //2