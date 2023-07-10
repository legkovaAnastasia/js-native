
const students = [
    {
        name: 'bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'john',
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const getNames = (array) => {
    const result = []
    const getNameValue = (el) => el.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getNameValue(array[i])
    }
    return result
}

// console.log(getNames(students))

const getUpdatedStudents = (array) => {
    const result = []
    const getResult = (el) => ({...el, isStudent: true})
    for (let i = 0; i < array.length; i++) {
        result[i] = getResult(array[i])
    }
    return result
}

// console.log(getUpdatedStudents(students))
const getResult = (el) => ({...el, isStudent: true})
const getMappedArray = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])
    }
    return result
}

// console.log(getMappedArray(students, getResult))
// console.log(students.map(el=>el.name))

const getFilteredFunction = (array, func) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            result.push(array[i])
        }
        return result
    }
}
// console.log(getFilteredFunction(students, st=>st.age>21))
// console.log(students.filter(st=>st.age>=21))

const myReverse = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
    }
}

const myIncludes = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true
        }
    }
    return false
}

const myItem = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i
        }
    }
    return -1
}

// console.log(myItem(students, students[0]))

const myEvery = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === false) {
            return false
        }
    }
    return true
}

// console.log(myEvery(students, st=> st.age>18 ))


const myFlat = (array) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                result.push(array[i][j])
            }
        } else {
            result.push(array[i])
        }
    }
    return result
}

console.log(myFlat([1,2,3,[4,5]]))
console.log(myFlat([1,2,[3,[4,5]]]))