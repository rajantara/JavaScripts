
function WeirdMultiply(sentences) {
  let x = sentences.toString()
  let z = x.split("")
  let y = 1
  if (z.length === 1) {
    return z;

  } else {
    for (var i = 0; i < z.length; i++) {
      y *= z[i];

    }
  }
  return WeirdMultiply(y)


}
console.log(WeirdMultiply(39)); // -> 3 * 9 = 27 * 7 = 14 * -> 1 * 4 = 4
console.log(WeirdMultiply(999));// -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(WeirdMultiply(3));// -> 3 karena telah satu digit



