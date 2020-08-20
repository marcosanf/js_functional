//Function Declaration
function HelloWorld() {
    console.log('Hello World!!')
}

HelloWorld()

// Function Expression 

const validationNumber = function(x,y){
    return console.log(x === y ? true : false)
}

validationNumber(6,7)

// Parameter flexibility

function somar(a,b=0) {
    return a+b
}

let result = somar(4,5)
console.log(result)

result = somar(4,6,6,8)
console.log(result)

result = somar(4)
console.log(result)