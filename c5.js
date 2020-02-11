function stringmanipulation(leo) {
    if (
        leo.charAt(0) === "a" ||
        leo.charAt(0) === "i" ||
        leo.charAt(0) === "u" ||
        leo.charAt(0) === "e" ||
        leo.charAt(0) === "o" 
 ) {
    console.log(leo);
    

 } else {
     let cayo1 = leo.slice(1); // ebek
     let cayo2 = leo[0].concat("nyo"); //bnyo
     let gabung = cayo1 + cayo2;
    console.log(gabung);

    var stringmanipulation = "leo"
    
    return stringmanipulation 
    
  } 
     


 }
stringmanipulation("ayam"); //"ayam"
stringmanipulation("bebek"); //"ebeknyo"
