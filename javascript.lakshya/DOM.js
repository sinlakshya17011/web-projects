/*const student = {
    fullName : 'Lakshya Singh',
    marks : "92.2",
    printMarks:function(){
        console.log("marks = ", this.marks);
    },
    };*/


// const employee ={
//     calcTax() {
//      console.log("the tax rate in 15%");

//     },
// }    

// const karan = {
//     salary: 50000,
//     calcTax() {
//       console.log("the tax rate in 13%");  
//     }

// }

// karan.__proto__= employee;


/*class ToyotaCar {
     
     constructor(brand,mileage){
       console.log("creating new objects")
       this.brand=brand;
       this.mileage=mileage;
     } 

     start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    
}

let fortuner = new ToyotaCar("fortuner" , 10);
console.log(fortuner)
let lexus = new ToyotaCar("lexus" , 14);
console.log(lexus)*/

/*class Person {
    constructor(name ,age , branch){
       
        this.species = "Homo sapienns"
    }
    eat(){
        console.log("eat")
    }
}

class Engineer extends Person{
    constructor(name , age , branch){
        super(name);
        this.name = name;
        this.age = age;
        this.branch = branch;
        
    }
    work(){
        super.eat();
        console.log("solve problems , builds something")
    }
}



let engobj = new Engineer("Lakshya" , 20 , "electronics engg");*/


let DATA = "information about college"

class user{
    constructor(name , email){
        this.name = name;
        this.email = email
    }

    viewData(){
        console.log("data =" , DATA)
    }
}

let student1  = new user("aadi" , "aadi23@gmail.com")
let student2 = new user("loki" , "loki007@gmail.com")

