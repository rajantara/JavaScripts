function deretkaskus(n) {
    var hasil = [];
    for (i = 1; i <= n; i++) {
        var k = i * 3;
        //console.log(k);
        if (k % 5 === 0 && k % 6 === 0) {
            hasil.push("KASKUS");
        } else if (k % 5 == 0) {
            hasil.push("KAS");
        } else if (k % 6 == 0) {
            hasil.push("KUS");
        } else {
            hasil.push(k);
        }




    }
    return hasil;

}

console.log(deretkaskus(10));




