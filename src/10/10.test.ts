import {
    addBooks,
    changeAdress,
    changeHouse,
    changeLaptop, CompanyType,
    hairdresser, removeBook, updateBook, updateCompany, updateCompany2,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10";

// test('reference type test', () => {
//     let user: UserType = {
//         name: 'Nastya',
//         hair: 568,
//         adress: {city: 'Ngsk'}
//     }
//     const newUser = hairdresser(user, 2)
//     expect(newUser.hair).toBe(284)
//     expect(user.hair).toBe(568)
//     expect(newUser.adress).toBe(user.adress)
// })
//
// test('change adress test', () => {
//     let user: UserWithLaptopType = {
//         name: 'Nastya',
//         hair: 568,
//         adress: {
//             city: 'Ngsk',
//             house: 12
//         },
//         laptop: {tilte: 'xiaomi'}
//     }
//     const newUser = changeAdress(user, 'Msk')
//     expect(newUser).not.toBe(user)
//     expect(newUser.adress).not.toBe(user.adress)
//     expect(newUser.laptop).toBe(user.laptop)
//     expect(newUser.adress.city).toBe('Msk')
// })
// test('change house test', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Nastya',
//         hair: 568,
//         adress: {
//             city: 'Ngsk',
//             house: 12
//         },
//         laptop: {tilte: 'xiaomi'},
//         books: ['M&M', 'Anna K', 'Code', '']
//     }
//     const newUser = changeHouse(user, 99)
//     expect(newUser).not.toBe(user)
//     expect(newUser.books).toBe(user.books)
//     expect(newUser.adress).not.toBe(user.adress)
// })
// test('add new books to user test', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Nastya',
//         hair: 568,
//         adress: {
//             city: 'Ngsk',
//             house: 12
//         },
//         laptop: {tilte: 'xiaomi'},
//         books: ['M&M', 'Anna K', 'Code', '']
//     }
//     const newUser = addBooks(user, 'ts')
//     expect(newUser).not.toBe(user)
//     expect(newUser.books).not.toBe(user.books)
//     expect(newUser.adress).toBe(user.adress)
//     expect(newUser.books[4]).toBe('ts')
// })
// test('update book test', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Nastya',
//         hair: 568,
//         adress: {
//             city: 'Ngsk',
//             house: 12
//         },
//         laptop: {tilte: 'xiaomi'},
//         books: ['M&M', 'Anna K', 'Code', '']
//     }
//     const newUser = updateBook(user, 'Code', 'ts')
//     expect(newUser).not.toBe(user)
//     expect(newUser.books).not.toBe(user.books)
//     expect(newUser.adress).toBe(user.adress)
//     expect(newUser.books[2]).toBe('ts')
// })
// test('remove M&M book', () => {
//     let user: UserWithLaptopType & UserWithBooksType = {
//         name: 'Nastya',
//         hair: 568,
//         adress: {
//             city: 'Ngsk',
//             house: 12
//         },
//         laptop: {tilte: 'xiaomi'},
//         books: ['M&M', 'Anna K', 'Code', '']
//     }
//     const newUser = removeBook(user, 'M&M',)
//     expect(newUser).not.toBe(user)
//     expect(newUser.books).not.toBe(user.books)
//     expect(newUser.adress).toBe(user.adress)
//     expect(newUser.books[0]).toBe('Anna K')
// })
test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Nastya',
        hair: 568,
        adress: {
            city: 'Ngsk',
            house: 12
        },
        laptop: {tilte: 'xiaomi'},
        companies: [
            {id: 1, title: 'ooo'},
            {id: 2, title: 'vvv'}
        ]
    }
    const newUser = updateCompany(user, 1, 'WWW')
    expect(newUser.adress).toBe(user.adress)
    expect(newUser.laptop.tilte).toBe('xiaomi')
    expect(newUser.companies[0].title).toBe('WWW')
    console.log(user.companies[0].title)
})
test('update company2', () => {

    let companies: {[key:string]: Array<CompanyType> }={
        'Nastya': [{id: 1, title: 'ooo'}, {id: 2, title: 'vvv'}],
        'Anna':[{id:2, title: 'vvv'}]
    }
const copy=updateCompany2(companies, 'Nastya', 1, 'WWW')
    expect(copy).not.toBe(companies)
    expect(copy['Nastya'][0].title).toBe('WWW')
})

