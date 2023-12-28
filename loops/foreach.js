let arr = [1,2,3,4,5,6]
// it comes under HOF
// it is not a loop it works like it but we can not say it loop
arr.forEach( (val, index, myarray)=>{
    if ( val % 2 === 0){
        console.log('even ')

    }
    console.log(val)
    console.log(myarray)
    console.log(index)
},  )

