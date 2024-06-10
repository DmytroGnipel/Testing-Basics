export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const reverseString = string => string.split('').reverse().join('')

const func = () => {
    const object = {}
    object.add = (a, b) => a + b
    object.subtract = (a, b) => a - b
    object.divide = (a, b) => a / b
    object.multiply = (a, b) => a * b
    return object
}

const calculator = func()

const caesarCipher = (string, shiftFactor) => {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            newString += forUpperCase(string, i, shiftFactor)
        }
        else if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
            newString += forLowerCase(string, i, shiftFactor)
        }
        else  newString += string.charAt(i)   
    }
    return newString
}

const forUpperCase = (string, index, shiftFactor) => {
    let newCode
    let newLetter
    //when we do not go out from Z (code 90)
    if (string.charCodeAt(index) + shiftFactor < 91) {
        newCode = string.charCodeAt(index) + shiftFactor
        newLetter = String.fromCharCode(newCode)
    }
    //when we go out
    else {
        newCode = 65 + string.charCodeAt(index) + shiftFactor - 91
        newLetter = String.fromCharCode(newCode)
    }
    return newLetter
    
}

const forLowerCase = (string, index, shiftFactor) => {
    let newCode
    let newLetter
    if (string.charCodeAt(index) + shiftFactor < 123) {
        newCode = string.charCodeAt(index) + shiftFactor
        newLetter = String.fromCharCode(newCode)
    }
    else {
        newCode = 97 + string.charCodeAt(index) + shiftFactor - 123
        newLetter = String.fromCharCode(newCode)
    }
    return newLetter
}

const analyzeArray = (array) => {
    const min = Math.min(...array)
    const max = Math.max(...array)
    const length = array.length
    const average = array.reduce((total, num) => total + num) / array.length
    return {min, max, average, length}
}



