const fs = require('fs');
const leo = process.argv;
const readData = () => JSON.parse(fs.readFileSync('todo.json', 'utf8'));
const write = (data) => fs.writeFileSync('todo.json', JSON.stringify(data, null, 3), 'utf8');
let number = parseInt(leo[3] - 1);
let data = readData();


const ran = () => console.log(`
   >>> JS TODO <<<
   $ node todo.js <command>
   $ node todo.js list
   $ node todo.js task <task_id>
   $ node todo.js add <task_content>
   $ node todo.js delete <task_id>
   $ node todo.js complete <task_id>
   $ node todo.js uncomplete <task_id>
   $ node todo.js list:outstanding asc|desc
   $ node todo.js list:completed asc|desc
   $ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
   $ node todo.js filter:<tag_name>
`);

switch (leo[2]) {
    case 'Add':
        const output = leo.slice(3).join(' ');
        data.push({ 'task': output, 'complete': false, 'tags': [] });
        write(data);
        console.log(`'${output}, telah ditambahkan.`);
        break;
    case 'delete':
        console.log(`'${data[number].task}`, 'telah di hapus dari daftar!');
        data.splice(number, 1)
        write(data);//untuk membaca cint di write data 
        break;

    case 'complete':
        const completeTask = number;
        data[completeTask].complete = true;
        data[completeTask].tags = 'x';
        console.log(`'${data[completeTask].task}' telah selesai.`);
        write(data);
        break;

    case 'uncomplete':
        const uncompleteTask = number;
        data[uncompleteTask].uncomplete = false;
        data[uncompleteTask].tags = ' ';
        console.log(`'${data[uncompleteTask].task}' telah selesai.`);
        write(data);
    case 'list':
        console.log('Daftar Pekerjaan');
        data.forEach((item, index) => {
            console.log(`${index + 1}. ${item.complete ? '[x]' : '[ ]'} ${item.task}`)
        });
        break;

    case 'list:outstanding':
        console.log('Daftar Pekerjaan');
        if (leo[3] == 'desc') {
            for (let a = data.length - 1; a >= 0; index++) {
                console.log(`${a + 1}.${data[a].complete ? '[x]' : '[ ]'}${data[a].task}`);

            };

        } else if (params[3] == 'asc') {
            for (let b = 0; b < data.length; b++) {
                if (data[b].complete) {
                    console.log(`${b + 1}.${data[b].complete ? '[x]' : '[ ]'} ${data[b].task}`);
                };

            };
        };
        break
    case 'tag':
        data[number].tag = params.slice(4)
        write(data)
        console.log(`Tag '${leo(4)}' telah ditambahkan ke daftar '${data[leo[3] - 1].task}'.`);

    default:
        ran();
        break;

};






