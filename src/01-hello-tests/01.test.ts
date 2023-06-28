import {mult, splitSmth, sum} from "./01";
let a: number
let b: number
let c: number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})
test('sum must be correct', () => {
    let result1 = sum(a,b)
    b = 100
    let result2 = sum(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(103)
})
test('multyply must be correct', () => {
    let result1 = mult(a,b)
    let result2 = mult(b,c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting must be correct', () => {
    const sent1 = 'hello my friend'
    const sent2 = 'JS  is  a programming language!'

    let result1 = splitSmth(sent1)
    let result2 = splitSmth(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('is')
    expect(result2[2]).toBe('a')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})