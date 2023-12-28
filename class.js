
class Car{
     wheel = 4;
     constructor(name="demo", email, password) {
          this.name = name
          this.email = email
          if (String(password).length > 6){
              this.password = password
          }
          else {
              password = null
          }
     }


     show(){
          return `${this.name} and wheel = ${this.wheel}`
     }
// getter
     get getName(){
         return this.name

     }
// Setter
     set setPassword(pass){
         if (String(pass).length > 5) {
             this.password = pass
         }
     }
// getter
     get getPassword(){
         return this.password
     }

}


// wan to skip argument then use comma
let honda = new Car("mohan", "demo@mail.com", password=12345667)
// console.log(honda.show())

console.log(honda.getName)
console.log(honda.password)
// how to set the value
honda.setPassword = 12345789
console.log(honda.getPassword)



// Inheritence

class Honda extends Car{
    show() {
        console.log(super.show())
        return "Hello";
    }
}

let two = new Honda()
console.log(two.show())
// console.log(honda.show())

let obj = {
    name: "Hello"
}

/*TODO: Prototype
    Each object has an internal link to another object called its prototype That
    prototype object has a prototype of its own and so on until null*/

/*
let father = {
    name : "ram",

}
let mother = {
    name : "jankee"
}

let son = {
    name : "nilesh"
}
son.__proto__ = mother
mother.__proto__ = father

*/

// Function.prototype.mybind = function sayH(){
//
// }



