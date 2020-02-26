class MesinHitung{ //metode ini intuk perulangan pemanggilan 
   constructor(){// di tahap ini kita megunakan fungsi berulangan yang akan di panggil secara bersamaan 
       this.x = 1; // kenapah mengunak x karena itus imbol pada soal run.js 
   }
   add(number){// ini beberapa fungsi yanga yang berulangan yang akan di pangggil secara bersamaan 
       this.x += number;// pada tahap ini value dari nilia dan mebrikan +=  dan akan di return oleh this
       return this;
    } 
   
    substract(number){
      this.x += number;
      return this;
    }

    divide(number){
        this.a += number;
        return this;
    }

    multiply(number){
        this.x += number;
        return this;
    }

    square(number){
        this.x += Math.pow(this.x, 2)
        return this;
    }

    exponent(number){
        this.x += Math.pow(this.x, number);
        return this;
    }

    squareRoot(number){
        this.x += Math.sqrt(this.x);// math.sqrt adalah untuk mengembalikan akar kuadrat
        return this;
    }

    result(){
        console.log(this.x);
        
    }

}
export default MesinHitung;