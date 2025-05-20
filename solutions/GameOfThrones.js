//Replace character from string at given pos
function replaceAt(str, char, index) {
  return str.substring(0, index) + char + str.substring(index + char.length);
}

//Remove character from string at given pos
function removeCharFromString(string, start, length) {
  const p1 = string.slice(0, start);
  const p2 = string.slice(start + length);

  return p1 + p2;
}

//Checks if string is palindrome
function checkPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    const first = i;
    const last = str.length - 1 - i;
    if (str[first] !== str[last]) {
      return false;
    }
  }
  return true;
}

function gameOfThrones(s) {
  let word = "";
  let pos = 0;

  //Init new word
  for (let i = 0; i < s.length; i++) {
    word += "_";
  }

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    for (let j = i + 1; j < s.length; j++) {
      const next = s[j];

      if (current === next) {
        word = replaceAt(word, current, pos);
        word = replaceAt(word, next, word.length - 1 - pos);

        s = removeCharFromString(s, i, 1);
        s = removeCharFromString(s, j - 1, 1);

        i--;
        pos++;
        break;
      }
    }
  }

  //Character with no pairs
  if (s.length > 0) {
    word = replaceAt(word, s, pos);
  }

  if (checkPalindrome(word)) return "YES";
  return "NO";
}

console.log(gameOfThrones("aaabbbb")); //YES
console.log(gameOfThrones("cdefghmnopqrstuvw")); //NO
console.log(gameOfThrones("cdcdcdcdeeeef")); //YES
