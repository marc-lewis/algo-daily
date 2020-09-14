import reverseString from './ReverseString'

describe('ReverseString', () => {
    it('should reverse `aabbcc`', () => {
        const str = 'aabbcc'
        expect(reverseString(str)).toBe('bbccaa')
    })
})