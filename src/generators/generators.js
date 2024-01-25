//
// function* generateSalaryWithBonus(salary) {
//     const a =yield salary + (salary * 0.15) //15
//     console.log(a)
//     const b = yield salary + (salary * 0.2)
//     console.log(b)
// }
// const generator = generateSalaryWithBonus(2000)
// console.log(generator.next())
// console.log(generator.next(15))
// // console.log(generator.next())
// // console.log(1000+(1000*0.15))
//
// function* randomize(){
//     while (true) {
//         let randome = yield Math.floor(Math.random()*1000)
//         // yield randome
//     }
// }
// const randome = randomize()
// console.log(randome.next().value)
//
// //исп-ие в async (под капотом)
//
const foo = newAsync(function* () {
    const dataFromyahoo = yield fetch("https://yahoo.com/&query=js")
    console.log('data from yahoo', dataFromyahoo.url)
})

function newAsync(generationFunc) {
    return function () {
    const generator = generationFunc()

    function resolve(next) {
            if (next.done) {
                return Promise.resolve(next.value)
            }

            return Promise.resolve(next.value).then(res => {
                return resolve(generator.next(res))
            })
        }
        return resolve(generator.next())
    }
}
foo()