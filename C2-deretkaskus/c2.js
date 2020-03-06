function deretkaskus(n) {
    var hasil = [];// array kosong untuk menyimpan angka 10 yang di simpan di (n)
    for (var i = 1; i <= n; i++) {
        var k = i * 3;// varibael k dibuat untuk menyimpan nilai variabl i yang di kali 3(dari soal)
        if (k % 5 === 0 && k % 6 === 0) {//tahap ini digunakna untuk membrikan kondisi ketika variabel a di modulus(%) bagi 5 dan 6 sisanya harus 0 
            hasil.push("KASKUS");//tahap ini di jalnkan ketika kondisi di atas terpenuhi
        } else if (k % 5 == 0) {// tahap ini di gunakan untuk membrikan kondisi, ketika kondisi awal false makan kondisi ini dijalankan yg mana kondisinya 'k' modulus 5 apa sama dengan 0?
            hasil.push("KAS");
        } else if (k % 6 == 0) {// dan begitu pula yang ini
            hasil.push("KUS");
        } else {
            hasil.push(k);// dari hasil smua akan di push variabel k disini
        }
    }
    return hasil;// digunkan untuk menangkap atau menyimpan hasil perulaangan dan sebagagi jembatan untuk mengularkan nilai hasil dari fungsi
}
console.log(deretkaskus(10));

/* 
maksdunya jika 5 modulus 5 hasil bagi berapa serpti contoh dibuku dan
jika hasilnya salah maka hasil terbsebut akan di looping oleh else dan akan di push
oleh kaskus
















*/







