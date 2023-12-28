/*let MakePromice = new Promise( (resolve, reject)=>{
 setTimeout( ()=>{
     let arr = [1,2,3,4]
     if (arr.length === 3){
         resolve("Yes")
     }
     else {
         reject("Error getting")
     }
 },2500 )

})

res = MakePromice
res
    .then((response)=>{
        // console.log(response)
        return response
})
    .then((data)=>{
        console.log(`this is ${data}`)
    })
    .catch((error)=>{
        console.log(error)
    })
*/

let userOne = ()=>{
    console.log("I am user One")
}

let userTwo = ()=>{
    return new Promise(((resolve, reject) => {
        setTimeout( ()=>{
            let arr = [1,2,3,4]
            if (arr.length === 3){
                resolve("Yes")
            }
            else {
                reject("Error getting")
            }
        },2500 )
    }))
}

let userThree = ()=>{
    console.log("I am user third")
}
/*
userOne()

let callTwo =  ()=>{
    let response =  userTwo()
    response
        .then((res)=>{
                console.log(res)
            }

        )
        .catch((error)=>{
            console.log(error)
        })
}
callTwo()

userThree()
*/
let waiter = async () =>{
    userOne()

   await userTwo()
        .then((res)=>{
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })

    userThree()
}
/* first user one function will execute then wait for second function to execute
then third function will execute */
waiter()