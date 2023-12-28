
arr = [1,2,3,4]
arrTwo = [1,2,3,4,5,6]
arrThree = [1,2,3,4,5,6,7,8,9]

Array.prototype.getYourLength = function (){
    return this.length
}

console.log(arr.getYourLength())
console.log(arrTwo.getYourLength())
console.log(arrThree.getYourLength())


//=======================================

/*
myNewArray = [1,2,3,4,5,6]

Array.prototype.sumOfAll = function (  ) {
    let sum = 0
    for (let myArrayElement of this) {  // here this point to the myNewArray
        sum = sum + myArrayElement
    }
    console.log(sum)
}
    myNewArray.sumOfAll()
*/
//==================================

/*TODO: Prototype
Each object has an internal link to another object called its prototype That
prototype object has a prototype of its own and so on until null
*/

let father = {
    name : "ram",

}
let mother = {
    name : "jankee"
}

let son = {
    name : "nilesh"
}

mother.__proto__ = father
son.__proto__ = mother



Function.prototype.mybind = function sayH(){

}

// Inheritance || you can call it prototypal inheritance

let User = {
    name : "demo",
    email: "demo@mail.com",
}
let Teacher = {
    makeVideo: true,
}

let TeachingSupport = {
    support: "Helping Teacher to make good content"
}

/* //another way for inheritance but old style
let IssueResolver = {
    solveIssue: true,
    __proto__: User
}
*/

Object.setPrototypeOf(Teacher, User)  // best approach
Object.setPrototypeOf(TeachingSupport, Teacher)
// Teacher.__proto__ = User  // another way to do
// Teacher.Prototype = User // another way to do


console.log(Teacher.makeVideo)

console.log(Teacher.name)


//============================================

/* there is a String
  let str = "nilesh       "
  i want to get true length of string not whitespaces
  and make it by using prototype concept.
  it should look like this =>
  "Hello India".trueLength()  => it will give the true length
 */

let str = "Nilesh        "
String.prototype.trueLength = function () {
    return this.trim().length
}
console.log(str.trueLength())