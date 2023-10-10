//js-09
// замыкания:
// const counterCreator = () =>{
//     let count = 0
//
//     return()=> {
//         console.log(++count)
//     }
// }
//
// const counter1 = counterCreator()
// const counter2 = counterCreator()
//
// counter1()
// counter1()
// counter1()
//
// counter2()
// counter2()
// counter2()

//рекурсия
//2(4) === 2*2(4-1)===2*2*2(2)===2*2*2*2
//возведение в степень, то же:
// const pow = (x,n) => {
//   if (n===1){
//       return x
//   }
//   return x*pow(x,n-1)
// }
// let count=0
// const foo = ( )=>{
//     console.log(++count)
//     foo()
// }
// foo() //проверка кол-ва возмодных вызовов ф-ции без выхода из рекурсии

const car1 = {
    speed: 200
}
const car2 = {
    speed: 220
}

function showSpeed(){
    console.log(this.speed)
}