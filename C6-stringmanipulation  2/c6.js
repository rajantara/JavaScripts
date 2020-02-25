function stringmanipulation(leo) {
    if (
        leo.charAt(0) === "a" ||
        leo.charAt(0) === "i" ||
        leo.charAt(0) === "u" ||
        leo.charAt(0) === "e" ||
        leo.charAt(0) === "o"
    ) {
        return leo;
    } else {
        let pisah1 = leo.slice(1);
        let pisah2 = leo[0].concat("nyo");
        let gabung = pisah1 + pisah2;
        return gabung
    }
}

function sentencesmanipulation(ran){
    let a = ran.split(" ");
    let hasil = [];
    for (let index = 0; index < a.length; index++) {
        hasil.push(stringmanipulation(a[index]))
    }
    console.log(hasil.join(' '));
    
}

sentencesmanipulation('ibu pergi ke pasar bersama aku')