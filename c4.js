function indexPrime(index) {
    let number = 2;
    let counter = 0;
    while (counter < index) {// di tahap  ini apapakh index lebih kecil dari counter 
        let isPrime = true;
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
            }

        }
        if (isPrime) {
            counter++;
        }
        number++;
    }
    return number - 1;
}
console.log(indexPrime(4)); //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); //result => 450881

/*     
                "math.sqrt untuk mempercpat perhitungan di bwah in dekersipnya:"
Deskripsi
Java.lang.Math.sqrt (double a) mengembalikan akar kuadrat positif bulat benar dari nilai ganda. Kasus khusus -

Jika argumennya adalah NaN atau kurang dari nol, maka hasilnya adalah NaN.

Jika argumennya adalah infinity positif, maka hasilnya adalah infinity positif.

Jika argumen positif nol atau negatif nol, maka hasilnya sama dengan argumen.




*/


