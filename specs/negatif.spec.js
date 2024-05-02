import { AssertionError, expect } from 'chai'
import repeatString from '../repeatedString.js'

describe('Fitur menghitung huruf a', function() {
    describe('Negatif', function() {
        it('input kosong, hasilnya TypeError', function() {
            const hasil = () => repeatString()
            expect(hasil).to.throw(TypeError)
        })

        it('input aac dan 10, hasilnya TypeError', function() {
            const hasil = () => repeatString(10, 'aac')
            expect(hasil).to.throw(TypeError)
        })

        it('input aac dan aab, hasilnya AssertionError', function() {
            const hasil = repeatString('aac', 'aab')
            expect(hasil).to.be.NaN
        })

        it('input 10 dan 100, hasilnya TypeError', function() {
            const hasil = () => repeatString(10, 100)
            expect(hasil).to.throw(TypeError)
        })

        it('input string 10 dan string 100, hasilnya AssertionError', function() {
            const hasil = repeatString('10', '100')
            expect(hasil).to.equal(+0)
        })
    })
})