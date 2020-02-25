class CarFactory { //math.random berjan bersamaan dengan math florr agar mencari angka acak atau random
    constructor() { //fungsi math.floor adlah membulatkan angka ke bawah ke angka integer terdekat dan mengebalikan hasilnya
        this.numberofCars = [Math.floor(Math.random() * 4)];// fungsi angka 4 adalah jumlah mobil yang di tulisakan dalam parameter
    }
    startBuild() {
        let ResultCar = [];
        let starbuildBrio = new Brio(2, 4);
        let starbuildAlpard = new Alpard(4, 3);
        let starbuildRush = new Rush(4, 6);
        let starbuildLamborgini = new Lamborgini(2, 2);
        for (let index = 0; index < this.numberofCars; index++) {
            ResultCar.push(starbuildBrio.buildBrio());
            ResultCar.push(starbuildAlpard.buildAlpard());
            ResultCar.push(starbuildRush.buildRush());
            ResultCar.push(starbuildLamborgini.buildLamborgini());

        }
        console.log(this.numberofCars);
        console.log(ResultCar);
    }



}

class Car {
    constructor(numberOfDoor, numberOfSeat) {
        this.tyre = new Tyre(); //tyre adalah untuk pembuatan objek baru
        this.ProductionYear = 2001;
        this.numberOfDoor = numberOfDoor;
        this.numberOfSeat = numberOfSeat;
    }
    warrantyCalculation() { // untuk kalkulasi garansi suatu barang 
        let year = new Date();
        return (year.getFullYear() + (Math.floor(Math.random() * 4) + 3));
    }


}

class Tyre {
    constructor() {
        const tyreBrands = ['honda', 'suzuki', 'yamaha', 'lion'];
        this.tyreBrand = tyreBrands[Math.floor(Math.random() * 4)];

    }
    getBrand() {// jadi tyre brand atau brand dari mobil akan di buat disinini dan akan di console log disini atau di pangil mantap
        console.log(`Tyre brand: ${this.tyreBrand}`);
    }

}

class Brio extends Car {  // extends digunakan pada class declerations atau clas expresssion untuk membuat sbuat class yang merupakan turunan dari class lain.  
    buildBrio() {
        let objectBuild = {
            carBrand: 'Brio',
            numberOfDoor: `${this.numberOfDoor}`,
            numberOfSeat: `${this.numberOfSeat}`,
            tyre: `${this.tyre.tyreBrand}`,          // yang di bawah ini masudnya  jika production tahunnya samaketat maka keluar aktive dan jika tidak maka keluar expired
            warranty: `${this.warrantyCalculation() - this.productionYear >= 0 ? 'Active' : 'Expired'}`
        }
        return objectBuild;
    }
}

class Alpard extends Car {
    buildAlpard() {
        let objectBuild = {
            carBrand: 'Alpard',
            numberOfDoor: `${this.numberOfDoor}`,
            numberOfSeat: `${this.numberOfSeat}`,
            tyre: `${this.tyre.tyreBrand}`,
            warranty: `${this.warrantyCalculation() - this.yearsBuild >= 0 ? 'Active' : 'Expired'}`
        }

        return objectBuild;
    }
}

class Rush extends Car {
    buildRush() {
        let objectBuild = {
            carBrand: 'Rush',
            numberOfDoor: `${this.numberOfDoor}`,
            numberOfSeat: `${this.numberOfSeat}`,
            tyre: `${this.tyre.tyreBrand}`,
            warranty: `${this.warrantyCalculation() - this.yearsBuild >= 0 ? 'Active' : 'Expired'}`
        }
        return objectBuild;
    }
}

class Lamborgini extends Car {
    buildLamborgini() {
        let objectBuild = {
            carBrand: 'Lamborgini',
            numberOfDoor: `${this.numberOfDoor}`,
            numberOfSeat: `${this.numberOfSeat}`,
            tyre: `${this.tyre.tyreBrand}`,
            warranty: `${this.warrantyCalculation() - this.yearsBuild >= 0 ? 'Active' : 'Expired'}`
        }

        return objectBuild;
    }
}

let cars = new CarFactory();
cars.startBuild();

/*
--------------catatanc16-----------------
>class adalah sebuah cetakan dalam parameter

>construtur adalah sebuah method atau function yang di jalankan
ketika pertama kali objek di buat contonya const = newcar('suv','red')
di jalankan maka method dan constuttor lansung di jalankan juga, yang isinya memasukan
paramemter suv dan red ke dalam property car (this.type) dan (this.color)

>property/ data yang disimpan di dalam sebuah objek. pad acontoh di atas adalah
this.type dan this.colour,property dapat di akses di class method manapun yang ada di dalam objek
diatasnya saya memasukan string (on) ke dalam this.eginestatus di dalam method egine.star() note ini contoh
dalam internet bukan diatas yaa

>class method adalaah function/method yang ada dioam sebuah objek, dan untuk mengunkannya
class harus ada insatance terlebih dahulu menjadi obejk baru bisa dijalankan.

>statsik method adlalah yang sama sepreti class method, tetapi untuk menjalankannya tidak perlu
mengisntance class,cukup mengunakan namaclass.namamethod()




*/