let arr = [1,2,3,4,5,6]
let even = []
let odd = []
// let isEven = (num)=> (num % 2 === 0)
// TODO: this isEven fn is callback function
function isEven (num){
    return (num % 2 === 0)
}

// console.log(arr.every(isEven))

// TODO: this filter fn is HOF
function filter(arr, fn){
    for (let i of arr){
        if (fn(i) === true) {
            even.push(i)
        }
        else {
            odd.push(i)
        }
    }
}

filter(arr, isEven)
console.log(odd)
console.log(even)

/*  setTimeout : sets a timer and executes a callback
    function after the timer expires.
*/

function sayHi(){
    console.log("Hello Timer")
}
setTimeout(sayHi, 10000)

setTimeout( ()=>{

    }, 3000)

