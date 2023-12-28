/* The map() method returns a new array, whereas the forEach() method
does not return a new array. The map() method is used to transform
the elements of an array.(Each element on by one), whereas the forEach() method is used to loop
through the elements of an array
 */
/*
let oneArray = [1, 2, 3, 4, 5, 6]


oneArray.forEach((num)=> {
    console.log(num * num)
})


console.log(oneArray)

// MAP
let store = oneArray.map( (num)=> {
    return  num  * num
} )
console.log(store)

let name = ["nilesH", "moHan", "sohan", "rajesh"]
name = name.map( (name) => {
    return  name.toUpperCase()
} )

console.log(name)



let country = ["india", "pakistan", "japan", "USA"]

let storeCountry = country.filter( (country, index, array) => {
    console.log(`element is ${country}`)
    console.log(`index number is ${index}`)
    console.log(`array is ${array}`)
    return  country.includes("usa".toUpperCase())
}  )

console.log(`country is : ${storeCountry}`)
*/

//======================================================
console.log("=====================================")
console.log("=====================================")
console.log("=====================================")
console.log("=====================================")

// TODO: Reduce

let number = [1,2,3,4,5,6,7,8,9]

/* when we do not give initial value => initial value will be array[0]
current value will be => array[1]
index starts from 1
but when we provide initial value then index starts from 0 and current holds array[0]
 -it reduced all array and return a single value
 - from starting initial value is previous value
 */

/* you added 4 items in cart and wants to show cumulative price of all item */

let sum = number.reduce( (previous, current, index) =>{
    console.log(`index : ${index}`)
    console.log(`initial value is : ${previous}`)
    console.log(`current value is : ${current}`)
    return previous + current
},2 )

console.log(sum)