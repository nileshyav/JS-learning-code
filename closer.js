// inner function access the value from outer function.

function outer() {
    let first = 'Hello'

    function innerFunction() {
        console.log(first)
    }
    return innerFunction;
}

let greeting = outer()
greeting()