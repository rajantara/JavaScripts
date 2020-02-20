console.log(
    "selamat datang di permainan tebak kata,silakan isi dengan jawaban yang benar ya!"
);

  const fs = require("fs");
  const readline = require("readline");
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
     const object = JSON.parse(data);
     let number = 0;

     const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Tebakan: "
     })

     console.log(`Pertanyaan: ${object[number].definition}`);

     rl.prompt();
     rl.on("line", answer => {
       if (answer.toLowerCase() === object[number].term.toLowerCase()) {
         console.log("Selamat Anda Benar!");
         number++;
         if (number === object.length) {
           console.log("Hore Anda Menang!");
           rl.close();
         }
         console.log(`Pertanyaan: ${object[number].definition}`);
       } else {
         console.log("Wkwkwk, Anda Kurang Beruntung");
       }
   
       rl.prompt();
     }).on("close", () => {
       process.exit(0);
     });
   });
 