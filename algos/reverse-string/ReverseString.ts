export default function (str: string): string {
    let reversedString = ''
    for (let i = str.length; i > 0; i--) {
        reversedString += str[i - 1]
    }
    return reversedString
}
