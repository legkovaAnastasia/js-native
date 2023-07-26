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

function multiple(x) {
    // if(x % 3 === 0){
    //     return 'Bang'
    // }if(x % 5 === 0){
    //             return 'Boom';
    // }if (x % 3 === 0 && x % 5 === 0){
    //     return 'BangBoom'
    // }else {
    //     return 'Miss'
    // }
    switch (true) {
        case x % 3 === 0 && x % 5 === 0:
            return 'BangBoom';
        case x % 3 === 0:
            return 'Bang';
        case x % 5 === 0 :
            return 'Boom';
        default:
            return 'Miss'
    }
}

console.log(multiple(10))