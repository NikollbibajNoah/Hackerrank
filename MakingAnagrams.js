function makingAnagrams(s1, s2) {
    // Write your code here

    let count = 0;
    let n = s1.length;
    let m = s2.length;
    
    for(let i = 0; i< n; i++) {
        s2.includes(s1[i]) ? s2=s2.replace(s1[i], "") : count++;
    }

    return (m-(n-count)) + count;
}

console.log(makingAnagrams("abc", "amnop")); //6
console.log(makingAnagrams("cde", "abc")); //4
console.log(makingAnagrams("absdjkvuahdakejfnfauhdsaavasdlkj", "djfladfhiawasdkjvalskufhafablsdkashlahdfa")); //19