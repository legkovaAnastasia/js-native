import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: 'Msk',
        houses: [{buildedAt: 2012, repaired: false, adress: {number: 100, street: {title: 'white street'}}},
            {buildedAt: 2008, repaired: false, adress: {number: 100, street: {title: 'happy street'}}},
            {buildedAt: 2020, repaired: false, adress: {number: 101, street: {title: 'happy street'}}}],
        govermentBuildings: [],
        citizensNumber: 100000
    }
})

test('city must contain 3 houses', () => {
    expect(city.houses.length).toBe(3)

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].adress.number).toBe(100)
    expect(city.houses[0].adress.street.title).toBe('white street')

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].adress.number).toBe(100)
    expect(city.houses[1].adress.street.title).toBe('happy street')

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].adress.number).toBe(101)
    expect(city.houses[2].adress.street.title).toBe('happy street')
})