export type UsersType = {
    [key: string]: { id: number, name: string }
}

    let users: UsersType

beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'nastya'},
        '12312': {id: 12312, name: 'dima'},
        '23': {id: 23, name: 'katya'},
        '1': {id: 1, name: 'rita'}
    }
})

test('ww', ()=> {
    users['23'].name = 'ekaterina'

    expect(users['23'].name).toBe('ekaterina')
})
