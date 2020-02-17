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
    let hasil = '';
    for (let index = 0; index < a.length; index++) {
        hasil = hasil + stringmanipulation(a[index]) + " ";
    }
    return hasil;    
}




const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`hasil konversi: '${sentencesmanipulation(line)}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('good bye!');
  process.exit(0);
});