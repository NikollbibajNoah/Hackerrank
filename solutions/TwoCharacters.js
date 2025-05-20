function alternate(s) {
  // Write your code here

  let last = 0;
  let combinations = [];

  const sortedString = s.split("").sort().join("");

  for (let i = 0; i < sortedString.length; i++) {
    const char = sortedString[i];

    for (let j = i + 1; j < sortedString.length; j++) {
      const nextChar = sortedString[j];

      if (char !== nextChar) {
        if (!combinations.includes(char + nextChar))
          combinations.push(char + nextChar);
      }
    }
  }

  combinations.map((pair) => {
    const str = s
      .split("")
      .filter((char) => pair.includes(char))
      .join("");

    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if (i % 2 === 0) {
        if (char !== str[0]) return;
      }
      if (i % 2 !== 0) {
        if (char !== str[1]) return;
      }

      if (i === str.length - 1) {
        if (str.length > last) {
          last = str.length;
        }
      }
    }
  });

  return last;
}

console.log(alternate("beabeefeab")); // 5
console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab")); // 8
console.log(alternate("asvkugfiugsalddlasguifgukvsa")); // 0
