//Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway
// const noZero = (num) => {
//     let n = num.toString()
//     n = n.replace(/0*$/,'')
//     n = Number(n)
//     return n
// }
//
// console.log(typeof (noZero(-1230000)))

// Your task is to make a function that can take any non-negative integer as an argument
// and return it with its digits in descending order. Essentially, rearrange the digits
// to create the highest possible number.

//     Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// const maxOutput = (n) => {
//     let num = n.toString().split('')
//     num= num.sort((a,b)=> b-a)
//     num = Number(num.join(''))
//     return num
// }
//
// console.log(maxOutput(234))

// Your Job
// Find the sum of all multiples of n below m
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// import {sum} from "./01-hello-tests/01";

// function sumMul(n,m){
// let sum=0
//     if(n>0&&m>0) {
//         for (let i = 1; i * n < m; i++) {
//             sum += i * n
//         }
//         return sum
//     } else{
//         return 'INVALID'
//     }
// }
//
// console.log(sumMul(3,13))

// const findAverage = (array) => {
//     if (array.length > 0) {
//         let sum = 0
//         for (let i = 0; i < array.length; i++) {
//             sum += array[i]
//         }
//         return sum / array.length
//     } else {
//         return 0
//     }
// }
// console.log(findAverage([]))

// const peopleWithAgeDrink = (old) => {
//     if (old < 14) {
//         return 'drink toddy'
//     }
//     if (old >= 14 && old < 18) {
//         return 'drink coke'
//     }
//     if (old >= 18 && old < 21) {
//         return 'drink beer'
//     }
//     if (old >= 21) {
//         return 'drink whisky'
//     }
// }
//
// console.log(peopleWithAgeDrink(18))

// const betterThanAverage = (classPoints, yourPoints) => {
//     // debugger
//     // let array = classPoints.push(yourPoints)
//     let array = classPoints
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     let average = (sum + yourPoints) / (array.length + 1)
//     return average < yourPoints
// }
//
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

// const areaOrPerimeter = function (l, w) {
//     return l === w ? l * w : l * 2 + w * 2
//     // Return your answer
// };
//
// console.log(areaOrPerimeter(3, 5))

// function reverseList(list) {
//  return  list.reverse()
//  }
//
// console.log(reverseList([1,3,4,2]))

// function distinct(a) {
//  let unique = a.reduce((prev, cur)=>(prev.indexOf(cur)===-1)? [...prev,cur]:prev, [])
//  return unique
//  }
// можно через Set
// console.log(distinct([3,4,3,7,8,7]))

// class Kata {
//  static getVolumeOfCuboid(length, width, height) {
//   return length*width*height
//  }
// }
//
// console.log(Kata.getVolumeOfCuboid(2,5,3))

// function simpleMultiplication(number) {
//   return  number%2==0 ? number=number*8 : number=number*9
// }
//
// console.log(simpleMultiplication(2))
//
// function multiple(x) {
//     switch (true) {
//         case x % 3 === 0 && x % 5 === 0:
//             return 'BangBoom';
//         case x % 3 === 0:
//             return 'Bang';
//         case x % 5 === 0 :
//             return 'Boom';
//         default:
//             return 'Miss'
//     }
// }
//
// console.log(multiple(10))

// function addLength(str) {
//     return str.split(' ').map(el => el + ' ' + el.length)
// }
//
// console.log(addLength('sds dsfsf weweq'))

// function lowercaseCount(str){
// let count=0
//     let newstr= str.replace(/[^a-zA-Zа-яА-Я]/g, '', str)
//     if (newstr.length>0) {
//         for (let i = 0; i < newstr.length; i++) {
//             if (newstr[i] === newstr[i].toLowerCase()) {
//                 count++
//             }
//         }
//     }
//     return count
// }
//
// console.log(lowercaseCount("ABjjjjkC123!@€£#$%^&*()_-+=}{[]|;? />.<,~"))
// console.log('756ksdcbjf327456345@#$@@#!'.replace(/[^a-zA-Zа-яА-Я ]/g,""))

// function greet(name) {
//     if (name === "Johnny") {
//         return "Hello, my love!";
//     } else return "Hello, " + name + "!"
// }
//
// console.log(greet('vvv'))

// function removeEveryOther(arr){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(i%2===0){
//             result.push(arr[i])
//         }
//     }return result
// }
//
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))

// function doubleChar(str) {
//     let result = []
//     let arr = str.split('')
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//         result.push(arr[i])
//     }
//     return result.join('')
// }
//
// console.log(doubleChar('wEr_!'))

// function billboard(name, price = 30) {
//     let arr = name.split('')
//     let cost = 0
//     for (let i = 0; i < arr.length; i++) {
//         cost += price
//     }
//     return cost
// }
//
// console.log(billboard('ann ty'))


// function stringy(size) {
//     let str = ''
//     for (let i = 1; i <= size; i++) {
//         if (size > 0 && Number.isInteger(size)) {
//             str += i % 2
//         } else return 'wrong number'
//     }
//     return str
// }
// console.log(stringy(1.2))

// function sayHello( name, city, state ) {
//     return `Hello,  ${name.join(' ')}! Welcome to ${city}, ${state}! `
// }
//
// console.log(sayHello(['sdcs', 'sefcscfs', 'sdvsd'], 'cccc', 'cccdddd'))
//
//

// function evenOrOdd(number) {
// return number%2===0? 'Even': 'Odd'
// }
//
// console.log(evenOrOdd(11))

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
// return Math.min.apply(null, args)
//     }
// }
// let obj = new SmallestIntegerFinder()
// console.log(obj.findSmallestInt([78,56,232,12,8]))

//
// function countSheeps(sheep) {
//     let sum=0
//     sheep=sheep.flat()
//     for (let i = 0; i < sheep.length; i++) {
//         if(sheep[i]===true||sheep[i]>0){
//             sum+=1
//         }
//     }
// return sum
// }
// console.log(countSheeps([[undefined,null,false,true,true,false,null,undefined], 2]))

// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//             name = 'Mercury'
//             break;
//         case 2:
//             name = 'Venus'
//             break;
//         case 3:
//             name = 'Earth'
//             break;
//         case 4:
//             name = 'Mars'
//             break;
//         case 5:
//             name = 'Jupiter'
//             break;
//         case 6:
//             name = 'Saturn'
//             break;
//         case 7:
//             name = 'Uranus'
//             break;
//         case 8:
//             name = 'Neptune'
//             break;
//     }
//
//     return name;
// }
// console.log(getPlanetName(2))


// function checkAlive (health) {
//     if (health <= 0) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(checkAlive(0))

// function mystery() {
//     var results =
//         {sanity: 'Hello'};
//     return results;
// }
//
// console.log(mystery())

// function doubleInteger(i) {
//     return i*2;
// }


// function pillars(numPill, dist, width) {
// let result = 0
//     if (numPill===1){
//         return 0
//     } if (numPill===2) {
//         // numPill = numPill-1
//          result = dist*100
//     } else {
//          result = (numPill-1)*dist*100   + (numPill-2)*width
//     }
//     return result
// }
//
//function positiveSum(arr) {
//
// } console.log(pillars(11, 15, 30))

// function makeNegative(num) {
//     return num > 0 ? num * -1
//         : num === 0 ? 0 : num
// }
//
// console.log(makeNegative(0
// ))
// function positiveSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>0){
//             sum+=arr[i]
//         }
//     } return sum
// }
//
// console.log(positiveSum([1,-2,3,4,5]))

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd'
// }
//
// console.log(evenOrOdd(4))

// function greet(name){
// return `Hello, ${name} how are you doing today?`
// }
//
// console.log(greet('gdfgdfgdfg'))

// var findAverage = function (nums) {
//     let average = 0
//     for (let i = 0; i < nums.length; i++) {
//         average += nums[i]
//     }
//     return average / nums.length
// }
// console.log(findAverage([1, 3, 5, 7]))

// var replaceDots = function(str) {
//     return str.replace(/\./g, '-');
// }
// console.log(replaceDots('fdsf-dfsdf.'))

// function buildString(...template){
//     return `I like ${template.join(', ')}!`;
// }
//
// console.log(buildString('Cheese','Milk','Chocolate'))

// function addLength(str) {
//     const wordsArray = str.split(' ')
//
//     return  wordsArray.map(word => `${word} ${word.length}`)
// }
// function hero(bullets, dragons){
//     return  bullets/dragons>2?true : false
// }
//
// console.log(hero(0,5))
// function findNeedle(haystack) {
// let index =haystack.indexOf('needle')
//     return `found the needle at position ${index}`
// }
//
// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))

function* generateSalaryWithBonus(salary) {
    const a =yield salary + (salary * 0.15) //15
    console.log(a)
    const b = yield salary + (salary * 0.2)
    console.log(b)
}
const generator = generateSalaryWithBonus(2000)
console.log(generator.next())
console.log(generator.next(15))
// console.log(generator.next())
// console.log(1000+(1000*0.15))

function* randomize(){
    while (true) {
        let randome = yield Math.floor(Math.random()*1000)
        // yield randome
    }
}
const randome = randomize()
console.log(randome.next().value)