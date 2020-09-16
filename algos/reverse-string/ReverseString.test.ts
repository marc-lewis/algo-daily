import reverseString from './ReverseString'

describe('ReverseString', () => {
    it('should reverse `a`', () => {
        const str = 'a'
        expect(reverseString(str)).toBe('a')
    })
    it('should reverse `b`', () => {
        const str = 'b'
        expect(reverseString(str)).toBe('b')
    })
    it('should reverse `ab`', () => {
        const str = 'ab'
        expect(reverseString(str)).toBe('ba')
    })
})