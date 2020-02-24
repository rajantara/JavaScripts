CREATE TABLE user (
    id              INT             AUTO_INCREMENT,
    username        varchar(10)     NOT NULL,
    password        varchar(8)      NOT NULL,
    user_role        varchar(15)     NOT NULL,
    PRIMARY KEY (id)           
);

CREATE TABLE mahasiswa (
    nim             varchar(10)     NOT NULL,
    nama            varchar(30)     NOT NULL,
    umur            INT             NOT NULL,
    alamat          varchar(50)     NOT NULL,
    id_jurusan      INT             NOT NULL,
    PRIMARY KEY (nim),
    FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan)
);

CREATE TABLE jurusan (
    id_jurusan      INT             AUTO_INCREMENT,
    nama_jurusan    varchar(30)     NOT NULL,
    PRIMARY KEY (id_jurusan)     
);

CREATE TABLE dosen (
    nip             varchar(10)     NOT NULL,
    nama_dosen      varchar(30)     NOT NULL,
    PRIMARY KEY (nip)
);

CREATE TABLE matakuliah (
    id_matakuliah   INT             AUTO_INCREMENT,
    nama_matakuliah varchar(30)     NOT NULL,
    sks             varchar(1)      NOT NULL
);

CREATE TABLE kontrak (
    id_kontrak      INT             AUTO_INCREMENT,
    nim             varchar(10)     NOT NULL,
    nip             varchar(10)     NOT NULL,
    id_matakuliah   INT             NOT NULL,
    nilai           varchar(1)      NOT NULL,
    PRIMARY KEY (id_kontrak),
    FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY (nip) REFERENCES dosen(nip),
    FOREIGN KEY (id_matakuliah) REFERENCES matakuliah(id_matakuliah)      
);


INSERT INTO mahasiswa (nim, nama, alamat, id_jurusan,umur)
VALUES ("010", "rajan", "perintsi", 1,"18"),
("011", "kelvin", "Jl. topa", 2,"18"),
("012", "rian", "jl.artum", 3,"19"),
("013", "mukti", "jl.badia",4,"20"),
("014", "andros", "jl.kraton",5,"30"),
("015", "eko", "bandung",6,"21"),
("016", "romi","bandung",7,"22"),
("017","yasa","sulawesi",8,"23");



INSERT INTO jurusan (id_jurusan, nama_jurusan) 
VALUES (1, "komputer"), 
(2, "Sejarah"), 
(3, "Ekonomi"),
(4,"matematika"),
(5,"kimia"),
(6,"Data Mining"),
(7,"ilmu tembak"),
(8,"ilmu silat"),
(9,"ilmu tinju");


INSERT INTO dosen (nip, nama_dosen)
VALUES ("90D10", "Widy kurniawan"),
("90D11", "rizal anges"),
("90D12", "Ikhsan muliawan"),
("90D13", "alberto anjas"),
("90D14", "ridwan kamil"),
("90D15", "naruto"),
("90D16","jhon cena"),
("90D17","undertaker"),
("90D18","wiliam jhon"),
("90D19","sukijah");


INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, sks)
VALUES (101, "Pengantar Ilmu KOMPUTER", 3),
(102, "Pengantar Ilmu KIMIA", 3),
(103, "Pengantar Ilmu BIOLOGI", 3),
(104, "Geografi Dasar", 2),
(105, "Sejarah Dasar", 2),
(106,"ilmu bela diri",2),
(107,"Data Mining",4),
(108,"ilmu lompat",4),
(109,"senjata militer",4);


INSERT INTO kontrak (id_kontrak, nim, nip, id_matakuliah, nilai)
VALUES (111, "010", "90D10", 101, "A"),
(112, "011", "90D11", 104, "B"),
(113, "012", "90D12", 103, "C"),
(114, "011", "90D11", 102, "A"),
(115, "014", "90D14", 105, "B"),
(116, "015", "90D15", 106, "D"),
(117, "016", "90D16", 107, "E"),
(118, "012", "90D12", 108, "A"),
(118, "012", "90D12", 109, "A"),
(119, "015", "90D15", 109, "E");

INSERT INTO kontrak (id_kontrak, nim, nip, id_matakuliah, nilai)
VALUES (120, "012", "90D12", 109, "A");



/* Tampilkan data mahasiswa beserta nama jurusan */
SELECT mahasiswa.*, jurusan.nama_jurusan
FROM mahasiswa 
INNER JOIN jurusan ON mahasiswa.id_jurusan=jurusan.id_jurusan;

/* Tampilkan mahasiswa yang memiliki umur dibawah 20 tahun */
SELECT * 
FROM mahasiswa 
where umur < 20;

/* Tampilkan mahasiswa yang memiliki nilai 'B' ke atas */
SELECT mahasiswa.nim, mahasiswa.nama, kontrak.nilai, matakuliah.nama_matakuliah
FROM ((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim)
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah)
WHERE nilai BETWEEN 'A' and 'B';

/* Tampilkan mahasiswa yang memiliki jumlah sks lebih dari 10 */
SELECT mahasiswa.nim, mahasiswa.nama, SUM(sks) 
FROM ((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim) 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah) 
GROUP BY kontrak.nim 
HAVING SUM(sks) > 10;

/* Tampilkan mahasiswa yang mengontrak mata kuliah 'data mining' */
SELECT mahasiswa.nim, mahasiswa.nama, matakuliah.nama_matakuliah
FROM ((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim) 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah)
WHERE nama_matakuliah = 'Data Mining';

/* Tampilkan jumlah mahasiswa untuk setiap dosen */ 
SELECT dosen.nip, dosen.nama_dosen, COUNT(mahasiswa.nama)
FROM ((kontrak INNER JOIN mahasiswa ON kontrak.nim = mahasiswa.nim)
INNER JOIN dosen ON kontrak.nip = dosen.nip)
GROUP BY kontrak.nip
HAVING COUNT(mahasiswa.nama);

/* Urutkan mahasiswa berdasarkan umur */
SELECT * 
FROM mahasiswa 
ORDER BY umur ASC;

/* Tampilkan kontrak mata kuliah yang harus diulangi (nilai D dan E) */
SELECT mahasiswa.*, jurusan.nama_jurusan, dosen.*, matakuliah.*, kontrak.nilai
FROM ((((mahasiswa INNER JOIN kontrak ON mahasiswa.nim = kontrak.nim) 
INNER JOIN dosen ON kontrak.nip = dosen.nip) 
INNER JOIN matakuliah ON kontrak.id_matakuliah = matakuliah.id_matakuliah) 
INNER JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan)
WHERE nilai BETWEEN 'D' and 'E';



/* tambah siswa */
INSERT INTO mahasiswa (nim, nama, umur, id_jurusan, alamat)
VALUES ("018", "naruto", 22, 4, "hokage");

/* tambah mata kuliah */
INSERT INTO matakuliah (id_matakuliah, sks, nama_matakuliah)
VALUES (110, 4,"Data Mining");

/* tambah nilai */
INSERT INTO kontrak (id_matakuliah, nip, nim, id_kontrak, nilai)
VALUES (112, "90D10", "019", 112, "D"),
(121, "90D10", "019", 104, "D"),
(122, "90D10", "019", 107, "E"),
(123, "90D10", "019", 102, "B"),
(124, "90D10", "019", 105, "D"),
(125, "90D10", "020", 108, "E"),
(126, "90D13", "020", 103, "B");


-- no 4
select m.nim, m.nama, sum(mk.sks) total_sks
from mahasiswa m, matakuliah mk
    inner join kontrak k --(inner join)buat conecenta antar tabel yang berelasi
    on m.nim = k.nim and mk.id_matakuliah = k.id_matakuliah
group by m.nim
having sum(mk.sks) >= 10;--(having)yang memiliki sum jumlah sks lebih dari



