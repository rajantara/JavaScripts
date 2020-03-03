function Pola(str) {
    const hasil = []; // kurung siku untuk array kosong simpen hasil 
    let potonganPola = str.split(' '); // di split pakai spasi berfunsgi memisahkan angka atau tidak memangio angka yang tdk dibutukan 

    for (let a = 0; a <= 9; a++) {
        for (let b = 0; b <= 9; b++) {
            if (potonganPola[0].replace('#', a) * potonganPola[2] == potonganPola[4].replace('#', b)) {// funsgi replace adlah mencari string utunk nilai yang ditentukan oleh expresi reguler dan mengebalikan string baru dimana nilai ditentukan diganti
                hasil.push(a, b)

            }


        }


    }
    return hasil;
}
console.log(Pola("42#3 * 188 = 80#204"));
console.log(Pola("8#61 * 895 = 78410#5"));

