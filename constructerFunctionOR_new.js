// constructor function
let User = function (name, courseCount){
    this.name = name
    this.courseCount = courseCount

    this.getDetails =  function (){
        return `${this.name} and ${this.courseCount}`
    }
}

/* arrow function dont have this
ways to add extra function or variable in constructor function
lets add one more method in User object without touching the User Object
we can do it by prototype

 */


User.prototype.getCourseCount = function () {
    return this.courseCount
}
// what new is doing => new is doing memory allocation for new object
let nilesh = new User('nilesh', 20)
console.log( nilesh)


console.log(nilesh.getCourseCount())

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
/*
let arr = [1,2,3]
Array.prototype.HeyArray = function () {
    // console.log(`YOur length is ${arr.length}`)
    console.log(`YOur length is ${this.length}`) // this pointing to arr
}

arr.HeyArray()

*/
