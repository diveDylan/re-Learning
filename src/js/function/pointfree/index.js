
var add = (a, b, c, d) => a + b + c + d
function curry (fn) {
  let args = Array.from(arguments).slice(1)
  console.log(arguments, fn.length, args, args.length)
  return function () {
    args = args.concat(...arguments)
    return args.length === fn.length ? fn(...args) : curry(fn, ...args)
  }
}
// console.log(curry(add)(1)(2)(3)(4))

const curryES6 = (fn, arg=[]) => (...args) => [...args, ...arg].length === fn.length ? fn(...args, ...arg) : curryES6(fn, [...args, ...arg])

curryES6(add)(1)(2)(3)(4)


const addTwo = (x, y) => x + y
// const curryByTimes = (fn, arg, times) => (...args) => [...args, ...arg].length === times ? [...args, ...arg]

// create a compose function 

const compose = (f, g) => (x) => f(g(x))

// get name of a object
const getName = (x) => x.name

// get location
const greeting = (x) => `hello ${x}`


const greetingName = compose(greeting, getName)

greetingName({ name: 'dylan' })

// get log case A
console.log(greetingName({ name: 'dylan' }))
// get log case B
const log = (x) => console.log(x)
const composeLog = compose(log, greetingName)
const composeLogA = compose(compose(log, greeting), getName)
const composeLogB = compose(log, compose(greeting, getName))

composeLog({ name: 'dylan' })
composeLogA({ name: 'dylan' })
composeLogB({ name: 'dylan' })



