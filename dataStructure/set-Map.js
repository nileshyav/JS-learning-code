// Set contains unique values
/*let a =  [1,2,3,4,5,6,9,8,7,1,2,3,4,5,6,7,8,9]

let unique = new Set(a)

unique.add(78)
console.log(unique)
*/
// TODO: Map holds key value pair with any data type


let mymap = new Map()
mymap.set('name', 'nilesh')
mymap.set('course', 'JS')
mymap.set('count', 1)
console.log(mymap)

/*
{1: "one"}
{1,2,3,4,5} set
{'name' => 'nilesh', 'course' => 'JS'}  map
*/


let city = [
    ["india", "delhi"],
    ["Gijrat", "SUrat"],
    ["Raj", "jaipur"],
]

let newMap = new Map(city)
console.log(newMap)


// to print all keys in map
// method: 1
for (let i of newMap.keys()){
    console.log(i)
}
// print all values in map
for (let i of newMap.values()){
    console.log(i)
}

console.log('======================================')

newMap.forEach( (value, key, map)=>{
    console.log(`key is : ${key}`)
    console.log(`value is : ${value}`)
} )

console.log("============================")
console.log("============================")
console.log("============================")
console.log("============================")


for (let [key, value] of newMap) {
    console.log(key)
    console.log(value)
}

// console.log(newMap.entries())
// console.log(newMap.get('india'))