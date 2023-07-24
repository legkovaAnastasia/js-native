const increaseAge =(u:UserType)=> {
    u.age++
}

type UserType = {
    name: string
    age: number
}
test('big test', ()=>{
    let user:UserType = {
        name: 'nastya',
        age:30
    }

    increaseAge(user)
    expect(user.age).toBe(31)
})
test('array test', ()=>{
    let users = [
        {name: 'nastya',
            age: 30},
        {name: 'yura',
            age: 31}
    ]
let admins=users
    admins.push({name: 'yo', age: 10})

    expect(users[2]).toEqual({name: 'yo', age: 10})
})