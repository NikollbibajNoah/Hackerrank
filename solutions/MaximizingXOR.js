function maximizingXor(l, r) {
  let max = 0;

  for (let a = l; a <= r; a++) {
    for (let b = a; b <= r; b++) {
      const xor = a ^ b; // Bitweises XOR
      if (xor > max) {
        max = xor;
      }
    }
  }

  return max;
}

console.log(maximizingXor(10, 15)); // Expected output: 7
console.log(maximizingXor(9, 14)); // Expected output: 7
console.log(maximizingXor(5, 25)); // Expected output: 7
