// printing variable

//  class Car {
//     constructor(name) {
//         this.brand = name;
//     }
// }
// const mycar = new Car("Ford");
// console.log(mycar.brand);


// 2---Function calling ---------------

// class Car {
//     constructor (name) {
//         this.brand = name;
//     }
//     present(){
//         return "I have a " + this.brand;
//         }
// }
// const mycar = new Car("Ford");
// console.log(mycar.present());


// --------------inheritence

// class Car {
//     constructor(name){
//         this.brand = name;
//     }
//     present(){
//         return "i have a " + this.brand;
//     }
// }

// class Model  extends Car{
//     constructor (name , mod){
//         super(name);
//         this.model = mod;
//     }
//     show(){
//         return this. present() + ' this is ' + this.model
//     }
// }
// const mycar = new Model("Ford", 800);
// console.log(mycar.show());

// ------------------------------------arrow function

// hello = () => "Hello world";
// console.log(hello());

// or

// hello = () => {
//     return "hello world";
// }
// console.log(hello());

// value passing

// hello = (val) => {
//     return "hello" + val ;
// }
// console.log(hello(" Anand"))

//array

// const Vehicle = ['honda', 'bharat benz', 'Enfield'];
// const [ car ,truck ,  bike] = Vehicle;

// console.log(car);
// console.log(bike);

//-------------------------object

// const Person = {
//     firstName: "John", // objects 
//     LastName: " O P",
//     Age: 23
// };

// let { firstName, LastName, Age } = Person;
// console.log("i am " +firstName + LastName + " Age is " +Age);

//----------------nested objects

// const Vehicle = {
//     name: "Hundai",
//     color : "Red",
//     price: 490000,
     
//     Bike : {
//         bname: "Bullet",
//         bcolor: "Black",
//         bprice: 8990000
//     }
// }

// let { name, color, price, Bike: {bname, bcolor,bprice}} = Vehicle;
// console.log("I have vehicles most of are in " +color + " and  " + price + " and a  bike with " + bname)


// spead operator--------------------------

// const arrayone = [1,3,2]
// const arraytwo = [4,5,6]
// const combined = [...arrayone, ...arraytwo]

// console.log(combined)

// const a = [1,3,4,5,6]
// const c = [one , two ,...y] = a; // remaining elelements store in the y.
// console.log(y)
//--------------------------------------


// const car = {
//     name: "tata"
// }

// const carcolor = {
//     color: "red"
// }

// const mycar = { ...car, ...carcolor }
// console.log(mycar)

//------------------- if else ------------------
// function hello(){
//     console.log("hello")
// }

// function hai(){
//     console.log("hai")
// }

// let a = false;
// a ?  hello() : hai();




