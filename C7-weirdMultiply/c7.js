
function WeirdMultiply(sentences) {
  let x = sentences.toString()
  let z = x.split("")// pada tahap ini x.split bfungsi untuk memisahkan,atau mengihalkan salah satu yang tidak dibutuhkan 
  let y = 1
  if (z.length === 1) {// pada tahap ini panjang  "z" akan di hitung pada array ksong
    return z;// di sini akan di return oleh z pada z lengt di sebelumnya
s
  } else {// jika hasilnya salah maka hasil alah itu akan di shering disini
    for (var i = 0; i < z.length; i++) {// dan pada tahap ini akn dilooping oleh for
      y *= z[i];

    }
  }
  return WeirdMultiply(y)


}
console.log(WeirdMultiply(39)); // -> 3 * 9 = 27 * 7 = 14 * -> 1 * 4 = 4
console.log(WeirdMultiply(999));// -> 9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(WeirdMultiply(3));// -> 3 karena telah satu digit



