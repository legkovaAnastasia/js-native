import {MenType} from "./Destructuring";

let props: MenType
beforeEach(()=> {
    props = {
        name: 'Nastya',
        age: 30,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}]
    }
})

test('', ()=> {

    let {age} = props
    expect(age).toBe(30)
})

test('1', ()=> {
    let l1 = props.lessons[0]
    let l2 = props.lessons[1]

    let [,, ls3] = props.lessons  //если нужен доступ к третьему эл-ту массива, то перед
                                                // деструктуризацией нужно оставить две пустоты
    const [lesson1, ...restLessons] = props.lessons

    // expect(ls1.title).toBe('1')
    expect(ls3.title).toBe('3')
    expect(lesson1.title).toBe('1')
    expect(restLessons.length).toBe(2)

})

