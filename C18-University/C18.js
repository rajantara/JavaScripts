const readline = require('readline');
const Table = require('cli-table');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('university.db', (err) => {
    if (err) throw err;
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`=====================================================================
Welcome to Universtas Brawijaya
Jl. perintis No. 214Y
=====================================================================`);
function login() {
    rl.question('username: ', (username) => {// untuk membuka pertanyaan pada user dan akan di console log pad log
        console.log('=====================================================================');
        rl.question('password: ', (password) => {
            console.log('=====================================================================');
            db.serialize(() => {
                let sql = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
                db.get(sql, (err, row) => {
                    if (err)
                        throw err;
                    if (row) {
                        console.log(`Welcome, '${row.username}'. Your access level is: '${row.user_role}'`);
                        console.log('=====================================================================');
                        main();
                    } else {
                        console.log('Sorry you are not registered to use this service or wrong username and password');
                        login();
                    }
                })
            })
        })
    })
};

function main() {
    console.log(`
        =====================================================================
        Please choose the option below:
        [1] Mahasiswa
        [2] Jurusan
        [3] Dosen
        [4] Mata Kuliah
        [5] Kontrak
        [6] Log out
        =====================================================================
    `);
    rl.question('Enter one of the numbers from the options above:', (number) => {
        switch (number) {
            case '1':
                menuMahasiswa();
                break;
            case '2':
                menuJurusan();
                break;
            case '3':
                menuDosen();
                break;
            case '4':
                menuMatakuliah();
                break;
            case '5':
                menuKontrak();
                break;
            case '6':
                logout();
                break;
            default:
                console.log('Selection not selected');
                main();
                break;
        }
    })
};

function menuMahasiswa() {
    console.log(`
        =====================================================================
        Please choose the option below:
        [1] List Mahasiswa
        [2] Search Mahasiswa
        [3] Add Mahasiswa
        [4] Delete Mahasiswa
        [5] Back
        =====================================================================
    `);
    rl.question('Enter one of the numbers from the options above:', (number) => {
        switch (number) {
            case '1':
                listMahasiswa();
                break;
            case '2':
                searchMahasiswa();
                break;
            case '3':
                addMahasiswa();
                break;
            case '4':
                deleteMahasiswa();
                break;
            case '5':
                main();
                break;
            default:
                console.log('Selection not selected');
                main();
                break;
        }
    })
};

function listMahasiswa() {
    db.serialize(() => {
        const sql = 'SELECT * FROM mahasiswa';
        db.all(sql, (err, row) => {
            if (err) {
                throw err;
            } if (row) {
                let table = new Table({
                    head: ['NIM', 'Nama', 'Alamat', 'Umur', 'Jurusan'],
                    colWidths: [12, 20, 25, 6, 10]
                })
                row.forEach((mahasiswa) => {
                    table.push([`${mahasiswa.nim}`, `${mahasiswa.nama}`, `${mahasiswa.alamat}`, `${mahasiswa.umur}`, `${mahasiswa.id_jurusan}`]);
                })
                console.log(table.toString());
                menuMahasiswa();
            } else {
                console.log('No entry');
                menuMahasiswa();
            }
        })
    })
};

function searchMahasiswa() {
    console.log(`
        ====================================================
    `);
    rl.question('Enter NIM: ', (nim) => {
        console.log(`
        ====================================================
        `);
        db.serialize(() => {
            let sql = 'SELECT * FROM mahasiswa WHERE nim = ?';
            db.get(sql, [nim], (err, mahasiswa) => {
                if (err) {
                    throw err;
                }
                if (mahasiswa) {
                    console.log('NIM        :' + mahasiswa.nim);
                    console.log('Nama       :' + mahasiswa.nama);
                    console.log('Umur       :' + mahasiswa.umur);
                    console.log('Alamat     :' + mahasiswa.alamat);
                    console.log('Jurusan    :' + mahasiswa.id_jurusan);
                } else {
                    console.log(`Mahasiswa with NIM '${nim}' not registered`);
                }
                menuMahasiswa();
            })
        })
    })
};

function addMahasiswa() {
    console.log('Complete the data below:');
    rl.question('NIM: ', (nim) => {
        rl.question('Nama: ', (nama) => {
            rl.question('Umur: ', (umur) => {
                rl.question('Alamat: ', (alamat) => {
                    rl.question('Jurusan: ', (id_jurusan) => {
                        db.serialize(() => {
                            let sql = `INSERT INTO mahasiswa (nim, nama, umur, alamat, id_jurusan) VALUES ('${nim}', '${nama}', '${umur}', '${alamat}', '${id_jurusan}')`
                            db.run(sql, (err) => {
                                if (err) {
                                    throw err;
                                }
                                menuMahasiswa();
                            })
                        })
                    })
                })
            })
        })
    })
};

function deleteMahasiswa() {
    const sql = 'DELETE FROM mahasiswa WHERE nim = ?';
    rl.question('Enter the Mahasiswa NIM to delete:', nim => {
        db.run(sql, [nim], (err, row) => {
            if (err) throw err;
            console.log('Deleted successfully');
            menuMahasiswa();
        })
    })
};

function menuJurusan() {
    console.log(`
        =====================================================================
        Please choose the option below:
        [1] List Jurusan
        [2] Search Jurusan
        [3] Add Jurusan
        [4] Delete Jurusan
        [5] Back
        =====================================================================
    `);
    rl.question('Enter one of the numbers from the options above:', (number) => {
        switch (number) {
            case '1':
                listJurusan();
                break;
            case '2':
                searchJurusan();
                break;
            case '3':
                addJurusan();
                break;
            case '4':
                deleteJurusan();
                break;
            case '5':
                main();
                break;
            default:
                console.log('Selection not selected');
                main();
                break;
        }
    })
};

function listJurusan() {
    db.serialize(() => {
        let sql = 'SELECT jurusan.id_jurusan,nama_jurusan FROM jurusan'
        db.all(sql, (err, row) => {
            if (err) {
                throw err;
            } if (row) {
                let table = new Table({
                    head: ['ID', 'Nama Jurusan'],
                    colWidths: [4, 14]
                })
                row.forEach((jurusan) => {
                    table.push([`${jurusan.id_jurusan}`, `${jurusan.nama_jurusan}`])
                })
                console.log(table.toString());
                menuJurusan();
            } else {
                console.log('No Entry');
                menuJurusan();
            }
        })
    })
};

function searchJurusan() {
    console.log(`
        ====================================================
    `);
    rl.question('Enter Jurusan ID: ', (id_jurusan) => {
        console.log(`
        ====================================================
        `);
        db.serialize(() => {
            const sql = 'SELECT jurusan.id_jurusan,nama_jurusan FROM jurusan WHERE id_jurusan = ?'
            db.get(sql, [id_jurusan], (err, jurusan) => {
                if (err) {
                    throw err;
                }
                if (jurusan) {
                    console.log('ID             :' + jurusan.id_jurusan);
                    console.log('Nama Jurusan   :' + jurusan.nama_jurusan);
                } else {
                    console.log(`Jurusan with ID '${id_jurusan}' not registered`);
                }
                menuJurusan();
            })
        })
    })
};

function addJurusan() {
    console.log(`Complete the data below:`);
    rl.question('ID Jurusan:', (id_jurusan) => {
        rl.question('Nama Jurusan:', (nama_jurusan) => {
            db.serialize(() => {
                let sql = `INSERT INTO jurusan (id_jurusan, nama_jurusan) VALUES ('${id_jurusan}', '${nama_jurusan}')`
                db.run(sql, (err) => {
                    if (err) {
                        throw err;
                    }
                    menuJurusan();
                })
            })
        })
    })
};

function deleteJurusan() {
    const sql = 'DELETE FROM jurusan WHERE id_jurusan = ?';
    rl.question('Enter the Jurusan ID to delete:', id_jurusan => {
        db.run(sql, [id_jurusan], (err, row) => {
            if (err) throw err;
            console.log('Deleted successfully');
            menuJurusan();
        })
    })
};

function menuDosen() {
    console.log(`
        =====================================================================
        Please choose the option below:
        [1] List Dosen
        [2] Search Dosen
        [3] Add Dosen
        [4] Delete Dosen
        [5] Back
        =====================================================================
    `);
    rl.question('Enter one of the numbers from the options above:', (number) => {
        switch (number) {
            case '1':
                listDosen();
                break;
            case '2':
                searchDosen();
                break;
            case '3':
                addDosen();
                break;
            case '4':
                deleteDosen();
                break;
            case '5':
                main();
                break;
            default:
                console.log('Selection not selected');
                main();
                break;
        }
    })
};

function listDosen() {
    db.serialize(() => {
        const sql = 'SELECT dosen.nip,nama_dosen';
        db.all(sql, (err, row) => {
            if (err) {
                throw err;
            } if (row) {
                let table = new Table({
                    head: ['NIP', 'Nama'],
                    colWidths: [12, 20]
                })
                row.forEach((dosen) => {
                    table.push([`${dosen.nip}`, `${dosen.nama_dosen}`]);
                })
                console.log(table.toString());
                menuDosen();
            } else {
                console.log('No entry');
                menuDosen();
            }
        })
    })
};

function searchDosen() {
    console.log(`
        ====================================================
    `);
    rl.question('Enter NIP: ', (nip) => {
        console.log(`
        ====================================================
        `);
        db.serialize(() => {
            const sql = 'SELECT * FROM dosen WHERE nip = ?';
            db.get(sql, [nip], (err, dosen) => {
                if (err) {
                    throw err;
                }
                if (dosen) {
                    console.log('NIP        :' + dosen.nip);
                    console.log('Nama Dosen :' + dosen.nama_dosen);
                } else {
                    console.log(`Dosen with NIP '${nip}' not registered`);
                }
                menuDosen;
            })
        })
    })
};

function addDosen() {
    console.log(`Complete the data below:`);
    rl.question('NIP: ', (nip) => {
        rl.question('Nama: ', (nama_dosen) => {
            db.serialize(() => {
                let sql = `INSERT INTO dosen (nip, nama_dosen) VALUES ('${nip}', '${nama_dosen}')`
                db.run(sql, (err) => {
                    if (err) {
                        throw err;
                    }
                    menuDosen();
                })
            })
        })
    })
};

function deleteDosen() {
    const sql = 'DELETE FROM dosen WHERE nip = ?';
    rl.question('Enter the Dosen NIP to delete:', nip => {
        db.run(sql, [nip], (err, row) => {
            if (err) throw err;
            console.log('Deleted Successfully');
            menuDosen();
        })
    })
};

function menuMatakuliah() {
    console.log(`
        =====================================================================
        Please choose the option below:
        [1] List Matakuliah
        [2] Search Matakuliah
        [3] Add Matakuliah
        [4] Delete Matakuliah
        [5] Back
    =====================================================================
    `);
    rl.question('Enter one of the numbers from the options above:', (number) => {
        switch (number) {
            case '1':
                listMatakuliah();
                break;
            case '2':
                searchMatakuliah();
                break;
            case '3':
                addMatakuliah();
                break;
            case '4':
                deleteMatakuliah();
                break;
            case '5':
                main();
                break;
            default:
                console.log('Selection not selected');
                main();
                break;
        }
    })
};

function listMatakuliah() {
    db.serialize(() => {
        const sql = 'SELECT * FROM matakuliah';
        db.all(sql, (err, row) => {
            if (err) {
                throw err;
            } if (row) {
                let table = new Table({
                    head: ['ID', 'Mata Kuliah'],
                    colWidths: [8, 20]
                })
                row.forEach((matakuliah) => {
                    table.push([`${matakuliah.id_matakuliah}`, `${matakuliah.nama_matakuliah}`])
                })
                console.log(table.toString());
                menuMatakuliah();
            } else {
                console.log('No entry');
                menuMatakuliah();
            }
        })
    })
};

function searchMatakuliah() {
    console.log(`
        ====================================================
    `);
    rl.question('Enter ID: ', (id_matakuliah) => {
        console.log(`
        ====================================================
        `);
        db.serialize(() => {
            let sql = 'SELECT * FROM matakuliah WHERE id_matakuliah = ?';
            db.get(sql, [id_matakuliah], (err, matakuliah) => {
                if (err) {
                    throw err;
                }
                if (matakuliah) {
                    console.log('ID             :' + matakuliah.id_matakuliah);
                    console.log('Mata Kuliah    :' + matakuliah.nama_matakuliah);
                } else {
                    console.log(`Matakuliah with ID '${id_matakuliah}' not registered`);
                }
                menuMatakuliah();
            })
        })
    })
};

function addMatakuliah() {
    console.log('Complete the data below:');
    rl.question('ID: ', (id_matakuliah) => {
        rl.question('Nama Matakuliah: ', (nama_matakuliah) => {
            rl.question('SKS: ', (sks) => {
                db.serialize(() => {
                    let sql = `INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, sks) VALUES ('${id_matakuliah}', '${nama_matakuliah}', '${sks}')`
                    db.run(sql, (err) => {
                        if (err) {
                            throw err;
                        }
                        menuMatakuliah();
                    })
                })
            })
        })
    })
};

function deleteMatakuliah() {
    const sql = 'DELETE FROM matakuliah WHERE nim = ?';
    rl.question('Enter the Mata Kuliah ID to delete:', nim => {
        db.run(sql, [id_matakuliah], (err, row) => {
            if (err) throw err;
            console.log('Deleted successfully');
            menuMatakuliah();
        })
    })
};

function menuKontrak() {
    console.log(`
        =====================================================================
        Please choose the option below:
        [1] List Kontrak
        [2] Search Kontrak
        [3] Add Kontrak
        [4] Delete Kontrak
        [5] Back
        =====================================================================
    `);
    rl.question('Enter one of the numbers from the options above:', (number) => {
        switch (number) {
            case '1':
                listKontrak();
                break;
            case '2':
                searchKontrak();
                break;
            case '3':
                addKontrak();
                break;
            case '4':
                deleteKontrak();
                break;
            case '5':
                main();
                break;
            default:
                console.log('Selection not selected');
                main();
                break;
        }
    })
};

function listKontrak() {
    db.serialize(() => {
        const sql = 'SELECT * FROM kontrak'
        db.all(sql, (err, row) => {
            if (err) {
                throw err;
            } if (row) {
                let table = new Table({
                    head: ['ID', 'NIM', 'NIP', 'ID Mata Kuliah', 'Nilai'],
                    colWidths: [5, 12, 12, 16, 7]
                })
                row.forEach((kontrak) => {
                    table.push([`${kontrak.id_kontrak}`, `${kontrak.nim}`, `${kontrak.nip}`, `${kontrak.id_matakuliah}`, `${kontrak.nilai}`]);
                })
                console.log(table.toString());
                menuKontrak();
            } else {
                console.log('No entry');
                menuKontrak();
            }
        })
    })
};

function searchKontrak() {
    console.log(`
        ====================================================
    `);
    rl.question('Enter Kontrak ID: ', (id_kontrak) => {
        console.log(`
        ====================================================
        `);
        db.serialize(() => {
            const sql = 'SELECT * FROM kontrak WHERE id_kontrak = ?';
            db.get(sql, [id_kontrak], (err, kontrak) => {
                if (err) {
                    throw err;
                }
                if (kontrak) {
                    console.log('ID             :' + kontrak.id_kontrak);
                    console.log('NIM            :' + kontrak.nim);
                    console.log('NIP            :' + kontrak.nip);
                    console.log('ID Mata Kuliah :' + kontrak.id_matakuliah)
                    console.log('Nilai          :' + kontrak.nilai);
                } else {
                    console.log(`Kontrak with ID '${id_kontrak}' not registered`);
                }
                menuKontrak();
            })
        })
    })
};

function addKontrak() {
    console.log('Complete the data below:');
    rl.question('ID Kontrak: ', (id_kontrak) => {
        rl.question('NIM: ', (nim) => {
            rl.question('NIP: ', (nip) => {
                rl.question('ID Mata Kuliah: ', (id_matakuliah) => {
                    rl.question('Nilai: ', (nilai) => {
                        db.serialize(() => {
                            let sql = `INSERT INTO kontrak (id_kontrak, nim, nip, id_matakuliah, nilai) VALUES ('${id_kontrak}', '${nim}', '${nip}', '${id_matakuliah}', '${nilai}')`
                            db.run(sql, (err) => {
                                if (err) {
                                    throw err;
                                }
                                menuKontrak();
                            })
                        })
                    })
                })
            })
        })
    })
};

function deleteKontrak() {
    const sql = 'DELETE FROM kontrak WHERE id_kontrak = ?';
    rl.question('Enter the Kontrak ID to delete:', id_kontrak => {
        db.run(sql, [id_kontrak], (err, row) => {
            if (err) throw err;
            console.log('Deleted successfully');
            menuKontrak();
        })
    })
};

function logout() {
    console.log(`
        =====================================================================
        Thank You
        =====================================================================
    `);
    rl.close();
};
login();