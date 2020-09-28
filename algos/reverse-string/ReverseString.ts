/**
 * A loop of O(N)
 * @param str The string to reverse
 */
// export default function (str: string): string {
//     let reversedString = ''
//     for (let i = str.length; i > 0; i--) {
//         reversedString += str[i - 1]
//     }
//     return reversedString
// }


export default function (str: string): string {
    let strArray = str.split('')
    let end = str.length - 1

    for(let i = 0; i < end; i++) {
        let temp = strArray[i]
        strArray[i] = strArray[end]
        strArray[end] = temp
        end--
    }

    return strArray.join('')
}


