/*
array Destructuring
spread
rest

 */


let value = [21 ,72, 85, 9, 64, 45]

// TODO: array Destructuring
/*
let [a, b, c, d, e, f] = value
console.log(a)


let fullstack = [
    ['html', 'css', 'js', 'tailwind'],
    ['js', 'express'],]


let [frontend, backend] = fullstack
console.log(frontend)
console.log(backend)
*/

// for skip some value use comma (,) | let say you want to pick 2,4
/*
let array = [1,2,3,4,5]
let [ ,a, ,b, ] = array
console.log(a)
console.log(b)

*/

/* let say you want to copy only two value and array length is huge
 you dont not want allocate one-one variable to each value */

let array = [1,2,3,4,5]

let [a, b, ...rest] = array
console.log( a)
console.log(rest)
/* rest operator takes value and zip it while spread takes the value
unzip it | ...rest can be written as ...nilesh |name is not important */

/*
 TODO: Example of spread operator
function sum(x, y) {
    return x + y
}

var one = [4,5]
console.log(sum(...one))
*/

function sum(...rest) {
    console.log(`value is : ${rest}`)
    let sum = 0
    for (let i of rest){
        sum = sum + i
    }
    return sum;
}

console.log(sum(1,2,3))