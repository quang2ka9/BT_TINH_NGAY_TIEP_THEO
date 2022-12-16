import { NextDayCalculator } from '../NextDayCalculator'
import { describe, expect, test } from '@jest/globals'



describe('Next Day Calculator Function', () => {
    test('1-1-2018', () => {
        let expectedDay = [2,1,2018]
        expect(NextDayCalculator.nextDayCalculate(1,1,2018)).toEqual(expectedDay)
    })

    test('31-1-2018', () => {
        let expectedDay = [1,2,2018]
        expect(NextDayCalculator.nextDayCalculate(31,1,2018)).toEqual(expectedDay)
    })

    test('30-4-2018', () => {
        let expectedDay = [1,5,2018]
        expect(NextDayCalculator.nextDayCalculate(30,4,2018)).toEqual(expectedDay)
    })

    test('28-2-2018', () => {
        let expectedDay = [1,3,2018]
        expect(NextDayCalculator.nextDayCalculate(28,2,2018)).toEqual(expectedDay)
    })

    test('29-2-2020', () => {
        let expectedDay = [1,3,2020]
        expect(NextDayCalculator.nextDayCalculate(29,2,2020)).toEqual(expectedDay)
    })

    test('31-12-2018', () => {
        let expectedDay = [1,1,2019]
        expect(NextDayCalculator.nextDayCalculate(31,12,2018)).toEqual(expectedDay)
    })
})