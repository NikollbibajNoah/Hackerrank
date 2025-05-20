function anagram(s) {
  const length = s.length;

  if (length % 2 !== 0) return -1;

  let count = 0;

  let p1 = s.slice(0, length / 2);
  let p2 = s.slice(length / 2, length);

  for (let i = 0; i < p2.length; i++) {
    const char = p2[i];

    if (!p1.includes(char)) {
      count++;
      const temp = p2.replace(char, "");
      p2 = temp;
      i--;
    } else {
      const temp = p1.replace(char, "");
      p1 = temp;
    }
  }

  return count;
}

console.log(anagram("aaabbb")); //3
console.log(anagram("ab")); //1
console.log(anagram("abc")); //-1
console.log(anagram("mnop")); //2
console.log(anagram("xyyx")); //0
console.log(anagram("xaxbbbxx")); //1
