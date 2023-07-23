// const students = ['alex', 'ivan', 'liza', 'bob', 'Maxim']
// console.log(students.sort())
// сорт не делает копию массива, лучше сначала сделать копию:

// console.log([...students].sort())
// console.log(students)
//
// console.log(students.slice().sort())

const numbers = [100, -10, 1000, 232, 988, 104]
// console.log(numbers.sort())

const compare = (a, b) => {
    if (a > b) {
        return 1
    } else return -1
}

// console.log(numbers.sort(compare))

const newCompare = (a, b) => a - b
// console.log(numbers.sort(newCompare))

const students = [
    {
        name:'bob',
        age: 20
    },
    {
        name:'ann',
        age: 22
    },
    {
        name:'kris',
        age: 22
    },
    {
        name:'kris',
        age: 28
    }
]
// console.log(students.sort((a,b)=>
//     a.name.toLowerCase().localeCompare(b.name.toLowerCase())))

const ageCompare = students.sort((a,b)=> a.age-b.age)
// console.log(ageCompare)

const newNumbers = [100, -10, 232, 988, 104,1000, 2000]
let count = 0
for (let j = 0; j < newNumbers.length-1; j++) {
    count++
    let isSorted=true
    for (let i = 0; i < newNumbers.length-1-j; i++) {
        count++
        if (newNumbers[i] > newNumbers[i + 1]) {
            isSorted=false
            let temp = newNumbers[i]  //пример для переливания жидкостей из двух стаканов = нужен третий временный
            newNumbers[i] = newNumbers[i + 1]
            newNumbers[i + 1] = temp
        }
    }
    if(isSorted) break
}
console.log(newNumbers)
console.log(count)