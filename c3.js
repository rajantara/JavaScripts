function romawi(n) {
    var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let hasil = '';
    for (let i = 0; i <= desimal.length; i++) {
        while(desimal[i] <= n) {
            hasil = hasil + roman[i];
            n = n - desimal[i];  
        }
        //menentukan hasil variable desimal
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





