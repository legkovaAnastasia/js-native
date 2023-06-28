type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: TechnologiesType[]
}

type AdressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    cityName:string
    countryName:string
}

type TechnologiesType = {
    id: number
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Dima',
    age: 32,
    isActive: false,
    adress: {
        streetTitle: 'seasame',
        city: {
            cityName: 'Minsk',
            countryName: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

console.log(student.technologies[2].title)