function gridChallenge(grid) {
  // Write your code here

  const sortRow = (str) => {
    return str.split("").sort().join("");
  };

  const n = grid.length;

  for (let i = 0; i < n; i++) {
    const row = grid[i];

    grid[i] = sortRow(row);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (grid[j][i] > grid[j + 1][i]) {
        return "NO";
      }
    }
  }

  return "YES";
}

console.log(gridChallenge(["ebacd", "fghij", "olmkn", "trpqs", "xywuv"])); ///YES
console.log(gridChallenge(["mpxz", "abcd", "wlmf"])); ///NO
