const todolistID1 = '1'
const todolistID2 = '2'

const objects = [
    {id: [todolistID1], title: 'what to learn', filter: 'all'},
    {id: [todolistID2], title: 'what to buy', filter: 'all'}
]

const tasks = {
    [todolistID1]: [
        {id: '10', title: 'js', isDone: true},
        {id: '20', title: 'css', isDone: false},
        {id: '30', title: 'html', isDone: false}
    ],
    [todolistID2]: [
        {id: '11', title: 'beer', isDone: true},
        {id: '21', title: 'bread', isDone: false},
        {id: '31', title: 'chips', isDone: false}
    ]
}

const addTodo = (todolistTitle) => {
    const newTodoId = '3'
    const newTodo = {
        id: newTodoId,
        title: todolistTitle,
        filter: 'all'
    }
    const updetedTodoList = [...objects, newTodo]
    const updatedTasks = {...tasks, [newTodoId]: []}
}
addTodo('what to read')

const changeFilter = (todolistID, newFilterValue) => {
    const filter = objects.map(el => el.id === todolistID ? {...el, filter: newFilterValue} : el)
}

const removeTodoList = (todolistID) => {
    const remove = objects.filter(el => el.id !== todolistID)
    delete tasks[todolistID]
}


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

const newSts = (students) => {
    const sts = {}
    for (let i = 0; i < students.length; i++) {
        sts[students[i].id] = sts[i]
        delete sts[students[i].id].id
    }
}

//задача из собесов: деструктурировать объект, например, найти сколько студентов с каким возрастом есть:

const ages = {}
for (let i = 0; i < students.length; i++) {
    if (Object.keys(ages).includes(String(students[i].age))) {  // Object.keys возвращает строку, поэтому в includes приводим к строке, иначе всегда проваливается в else
        ages[students[i].age] = ages[students[i].age] + 1
    } else {
        ages[students[i].age] = 1
    }
}

const agesFullData = {}
for (let i = 0; i < students.length; i++) {
    if (Object.keys(agesFullData).includes(String(students[i].age))) {
        agesFullData[students[i].age].push(students[i])                 // чтобы получить полную инфу о студенте, а не только инфо о возврасте и кол-ве студентов
    } else {
        agesFullData[students[i].age] = []
        agesFullData[students[i].age].push(students[i])
    }
}