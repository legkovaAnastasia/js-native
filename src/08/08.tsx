export const usersObj = {
    '0': 'nastya',
    '1': 'dima',
    '2': 'katya',
    '3': 'rita'
}
export type UsersType ={
    [key: string]: {id:number, name: string}
}
export const users: UsersType = {
    '101': {id: 101, name: 'nastya'},
    '12312': {id: 12312, name: 'dima'},
    '23': {id: 23, name: 'katya'},
    '1': {id: 1, name: 'rita'}
}
let user = {id: 13343, name: 'rrr'}
users[user.id] = user // добавть
delete users[user.id] //удолить
users[user.id].name = 'ppp'    // обновить
export const usersArray = [
    {id: 101, name: 'nastya'},
    {id: 12312, name: 'dima'},
    {id: 23, name: 'katya'},
    {id: 1, name: 'rita'}
]

// usersArray.find(u=>u.id===1)
usersArray.push(user)
//или иммутабоельно:
let usersCopy = [...usersArray, user]
let usersNew = usersCopy.filter(u=>u.id !== user.id)