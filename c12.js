const fs = require('fs');
const readline = require('readline');

if(process.argv[2] === 'data.json') {
    fs.readFile('data.json', (err, data) => {
      if (err) throw err;
      const object = JSON.parse(data);
      let number = 0;
      let count = 0;
        const rl = readline.Interface({
         input : process.stdin,
         output : process.stdout,
         prompt : 'jawaban: '
        });

        console.log(
            'selamat datang di permaianan tebak-tebakan, kamu akan diberikan pertayaan dari file ini "data.json. Untuk bermian, jawablah dengan jawaban yang sesuai.Gunakan "skip" untuk menanggukan  pertanyaanya, dan di akhir pertanyaan di tanyakan lagi.'
        );
        console.log(`pertanyaan: ${object[number].definition}`);
        
        rl.prompt();
        rl.on('line',answer => {
            if(answer.toLowersCase() === 'skip') {
                object.push(object[number]);
                number++;
                count = 0;
                console.log(`Pertanyaan: ${object[number].definition}`);   
            } else {
                if (answer.toLowersCase() === object[number].term.toLowersCase()) {
                    console.log('Anda Beruntung!');
                    number++;
                    if (number === object.length) {
                        rl.close();
                    }
                    console.log(`Pertanyaan: ${object[number].definition}`);

                    
                    
                } else {
                    count++;
                    console.log(
                        `Anda Kurang Beruntung! anda telah salah ${count} kali, silakan coba lagi.`
                    );
                    
                }
            }s
            rl.prompt();
        }).on('close', () => {
            console.log('Anda Berhasil');
            process.exit(0);
            
        });
   
    });

} else {
    console.log('Tolong sertakan nama file sebagai inputan soalnya Misalnya "node c12.js data.json"');
    
}
