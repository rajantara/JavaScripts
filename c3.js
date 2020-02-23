function romawi(n) {
    var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];// pada tahap ini kamu harus tahu simbol romawi dari variabel desimal untuk dapat melaknjutkan menulis varibel roman 
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];//pada tahap ini simbol romawi ada 13 simbol bersamaan dengan var roman

    let hasil = '';// di tahap ini kamu mengisi string kossong untuk menyipan hasil 
    for (let i = 0; i <= desimal.length; i++) {// dan tahap ini kamu akan melooping index i panjnag desimal sebagaiman biasanya
        while(desimal[i] <= n) {// while unyul funsgi perulangan nilai desimal i ke "n" atau mengitung panjjang yang ada di desimal "i"
            hasil = hasil + roman[i];// di tahap ini  hasil akan ditambah roman dengann index i
            n = n - desimal[i];  // di tahp ini n akn dikurnagi desimal i 
        }
        //menentukan hasil desimal 
    }
    //menentukan hasil variable roman
   
    return hasil;

}
console.log("script testing untuk konversi Romawi \n");
console.log("input    | expected | result");
console.log("------   |----------|-------");
console.log("4        | IV       |",romawi(4));
console.log("9        | IX       |",romawi(9));
console.log("13       | XIII     |",romawi(13));
console.log("1453     | MCDLIII  |",romawi(1453));
console.log("1646     | MCDXLVI  |",romawi(1646));

/*disnini kamu dperintahkan untuk menentukan hasil romawi di hasil result dengan mengunakan simbol 
 i adalah nilai "0" untuk memnetukan hasil dari anghka*/ 




