try {
    let one = "mohan"
    console.log(`name is ${one} `)
    console.log("Hello")
    throw new Error("Here error comes")

} catch (e) {
    console.log(e)
    // console.log(e.name)
    // console.log(e.message)

}finally {
    console.log("finally fixed")
}


