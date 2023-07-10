type MenType={
    name: string
    age: number
    lessons: Array<LessonsType>
}
type LessonsType={
    title: string
}

let props: MenType
beforeEach(()=> {
    props = {
        name: 'Nastya',
        age: 30,
        lessons: [{title: '1'}, {title: '2'}]
    }
})

test('', ()=> {

    let {age} = props
    expect(age).toBe(30)
})

