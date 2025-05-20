function happyLadybugs(b) {
  // Write your code here

  // Check for empty board
  if (checkEmptyBoard(b)) {
    return "YES";
  }

  // Check for full board
  if (!checkFullBoard(b)) {
    //Check if all ladybugs are happy
    if (checkHappyLadybugs(b)) {
        return "YES";
    }

    // Otherwise not playable
    return "NO";
  }

  for (let i = 0; i < b.length; i++) {
    const current = b[i];
    const next = b[i + 1];

    if (current === "_") continue;

    if (next && next !== current) {
      for (let j = i + 1; j < b.length; j++) {
        const currentJ = b[j];

        if (currentJ === current) {
          b = replaceCharAt(b, j, next);
          b = replaceCharAt(b, i + 1, currentJ);

          i++;
          break;
        }
      }
    }
  }

  // Check if all ladybugs are happy
  if (checkHappyLadybugs(b)) {
    return "YES";
  }

  return "NO";
}

function replaceCharAt(str, index, replacement) {
  return (
    str.substr(0, index) + replacement + str.substr(index + replacement.length)
  );
}

function checkEmptyBoard(b) {
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== "_") {
      return false;
    }
  }

  return true;
}

function checkHappyLadybugs(b) {
  for (let i = 0; i < b.length; i++) {
    const current = b[i];
    const next = b[i + 1];

    if (current === "_") continue;

    if (current === next) {
      i++;
      continue;
    } else if (current === b[i - 1]) {
      i++;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function checkFullBoard(b) {
  for (let i = 0; i < b.length; i++) {
    const current = b[i];

    if (current === "_") return true;
  }

  return false;
}

// console.log(happyLadybugs("RBY_YBR")); // YES
// console.log(happyLadybugs("X_Y__X")); // NO
// console.log(happyLadybugs("__")); // YES
// console.log(happyLadybugs("B_RRBR")); // YES

// console.log(happyLadybugs("AABBC")); // NO
// console.log(happyLadybugs("AABBC_C")); // YES
// console.log(happyLadybugs("_")); // YES
// console.log(happyLadybugs("DD__FQ_QQF")); // YES
// console.log(happyLadybugs("AABCBC")); // No

// console.log(happyLadybugs("G")); // NO
// console.log(happyLadybugs("GR")); // NO
// console.log(happyLadybugs("_GR_")); // NO
// console.log(happyLadybugs("_R_G_")); // NO
console.log(happyLadybugs("R_R_R")); // YES
console.log(happyLadybugs("RRGGBBXX")); // YES
console.log(happyLadybugs("RRGGBBXY")); // NO
