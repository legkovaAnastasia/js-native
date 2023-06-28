export type CityType = {
    title: string
    houses: Array<HouseType>
    govermentBuildings: Array<string>
    citizensNumber: number
}

type HouseType = {
    buildedAt: number
    repaired: boolean
    adress: AdressType
}

type AdressType = {
    number: number
    street: StreetType
}

type StreetType = {
    title: string
}