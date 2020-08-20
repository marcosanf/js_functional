function stringExample() {
    console.log('abcd')
}

const pi = function(){
    console.log(3.14)
}

// Function as Parameter
function callOneFunciton(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

callOneFunciton(3)
callOneFunciton(stringExample)
callOneFunciton(pi)

// Return a function from another function 

function Pot (base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const result = Pot(5)(2)
console.log(result)

// Examples

function sumThree (a) {
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

const finalResult = sumThree(2)(3)(5)
console.log(finalResult)


function Calculate(n) {
    return function(m) {
        return function(fn){
            return fn(n,m)
        }
    }
}

function multiplyNumbers(x,y){
    return x*y
}

const resultCalculate = Calculate(2)(3)(multiplyNumbers)
console.log(resultCalculate)

