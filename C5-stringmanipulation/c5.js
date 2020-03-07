function stringmanipulation(leo) {
    if (
        leo.charAt(0) === "a" ||// pada tahap ini kamu harus menyususn huruf vokal yaang ada maka dari vokal tersebut akan di exsekusi ole else  
        leo.charAt(0) === "i" ||  //Metode charAt () mengembalikan karakter pada indeks yang ditentukan dalam string.
        leo.charAt(0) === "u" ||
        leo.charAt(0) === "e" ||
        leo.charAt(0) === "o" 
 ) {
    console.log(leo);// pada tahap ni kamu harus looping dulu agar huruf vokal terbaca
 } else {
     let cayo1 = leo.slice(1); // di tahap ini kamu gunakan metode slice untuk memsihakan yang salah huruf vokal(bukan huruf  vokal) masudnya
     let cayo2 = leo[0].concat("nyo"); //bnyo // pada tahap ini huruf vokal yang salah di tambah pakai metode concat yaoitu nyo 
     let gabung = cayo1 + cayo2; // dan pada tahaap ini cayo 1 dan cayo 2 di gabung ata7u di tambah 
    console.log(gabung); // finaly kamu hasrusb looping lagi 'gabung' untuk mendapat hasilnya  
    return stringmanipulation   
  } 
 }
 
stringmanipulation("ayam"); //"ayam"
stringmanipulation("bebek"); //"ebeknyo"

/*pada tahap ini kamu harus membuta else jika ayam a itu adalah huruf vokal maka yang keluar ayam

  concat:Metode concat () digunakan untuk menggabungkan dua string atau lebih.
  slice;Metode slice () mengekstraksi bagian string dan mengembalikan bagian yang diekstraksi dalam string baru.


*/