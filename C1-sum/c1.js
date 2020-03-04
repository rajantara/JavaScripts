function sum() {// fungsi sum adalah nilai dena di berikan parameter kosong untuk mengisi niali sum di bawah dn akan di jembatani oleh console 
    var total = 0// di tahap ini variabel totalnya mulai dari "0" but sometime looping membutukan varibel ini untuk di jumhlakn bersama arguements
    for (let i = 0; i < arguments.length; i++) {//pada tahap ini arguemnts lebih kecil dari "i" dan agruemnets menghitung panjang mengunkan lenght dan di tambah mengunakan i++
        total = total + arguments[i];// disni total akan di jumlakan dengan arguemnts bersama i 
    }   //total akan di tangkap dari var tototal dan akan di tambah arguments varibael index
    console.log(total);// dan hasil semua akan di tangkap oleh console log total 
}
sum(1, 2, 7);
sum(1, 4)
sum(11)
sum(10, 3, 6, 7, 9);


/*
catatan penting :

kata kunci
ingat for adalah looping 
>sum adalah nilai
>pada tahap loooping apakah i lebih kecil dari agruemnts? maka di hitung panjangnya guys


1.Variabel tidak diinisialisasi
Ketika variabel JavaScript dideklarasikan, mereka memiliki nilai awal yang tidak terdefinisi. Jika Anda melakukan operasi matematika pada variabel yang tidak ditentukan, hasil Anda akan menjadi NaN yang berarti "Bukan Angka". Jika Anda menggabungkan string dengan variabel tidak terdefinisi, Anda akan mendapatkan string literal "tidak terdefinisi".



2.cd .. out folder berfungsi untuk keluar dari folder sebeleumnya

*/
