import reverseString from './ReverseString'

describe('ReverseString', () => {
    it('should reverse `a`', () => {
        const str = 'a'
        expect(reverseString()).toBe('a')
    })
})