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
("014", "andros", "jl.kraton",5,"30");


INSERT INTO jurusan (id_jurusan, nama_jurusan) 
VALUES (1, "komputer"), 
(2, "Sejarah"), 
(3, "Ekonomi"),
(4,"matematika"),
(5,"kimia");


INSERT INTO dosen (nip, nama_dosen)
VALUES ("90D10", "Widy kurniawan"),
("90D11", "rizal anges"),
("90D12", "Ikhsan muliawan"),
("90D13", "alberto anjas"),
("90D14", "ridwan kamil");


INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, sks)
VALUES (101, "Pengantar Ilmu KOMPUTER", 3),
(102, "Pengantar Ilmu KIMIA", 3),
(103, "Pengantar Ilmu BIOLOGI", 3),
(104, "Geografi Dasar", 2),
(105, "Sejarah Dasar", 2);


INSERT INTO kontrak (id_kontrak, nim, nip, id_matakuliah, nilai)
VALUES (111, "010", "90D10", 101, "A"),
(112, "011", "90D11", 104, "B"),
(113, "012", "90D12", 103, "C"),
(114, "013", "90D13", 102, "A"),
(115, "014", "90D14", 105, "B");




