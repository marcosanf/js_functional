// Sintaxe Arrow Functions

// Example 1
const startArrow = () => console.log('Hello Arrow!')
startArrow()

// Example 2
const stringConcatc = name => `Hi ${name}`
console.log(stringConcatc('Marcos'))

// Example 3
const sumNumers = (...numbers) => {
    total  = 0
    for (let n of numbers) {
        total += n
    }
    return total
}

console.log(sumNumers(1,2))
console.log(sumNumers(1,2,3))
console.log(sumNumers(1,2,4,5))

// Example 4

const Pot = x => y => Math.pow(x,y)

console.log(Pot(2)(4))

// This 

Array.prototype.last = function() {
    console.log(this[this.last - 1])
}

Array.prototype.primary = function() {
    console.log(this[0])
}

const numbers = [1,2,3]
numbers.last()
numbers.primary()