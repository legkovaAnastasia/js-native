//иммутабельность

export type UserType = {
    name: string
    hair: number
    adress: {
        city: string
        house?: number
    }
}
export type LaptopType = {
    tilte: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function hairdresser(u: UserType, power: number) {
    let copyUser = {...u, hair: u.hair / 2}
    // copyUser.hair=u.hair/power
    return copyUser
}

export function changeAdress(u: UserWithLaptopType, city: string) {
    return {...u, adress: {...u.adress, city: city}}
}

export function changeHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, adress: {...u.adress, house: house}}
}

export function changeLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

export function addBooks(u: UserWithBooksType, book: string) {
    return {...u, books: [...u.books, book]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string,
                           newBook: string) {
    return {
        ...u, books: u.books.map(b => b === oldBook ? newBook : b
        )
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType,
                           remove: string) {
    return {...u, books: u.books.filter(b => b !== remove)}
}

export function updateCompany(u: UserWithLaptopType & WithCompaniesType,
                              id: number, newTitle: string) {
    return {...u, companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)}
}
export function updateCompany2(companies: {[key:string]: Array<CompanyType> },
                               userName:string,
                               companyId:number,
                               newTitle:string){
    let copy = {...companies}
    copy[userName]=copy[userName].map(c=>c.id==companyId? {...c, title: newTitle}: c)
}