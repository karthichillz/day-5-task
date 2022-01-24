//Print odd numbers in an array

let arrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let oddNumbers = (function (arrayNumber) {

    return (arrayNumber.filter((x) => {

        return x % 2 !== 0

    }))
})(arrayNumber);
console.log("Odd Number in an array: " + oddNumbers);

//Convert all the strings to title caps in a string array

let stringArray = ["hello", "to", "all", "my", "friends", "its", "karthik"];

let uppercases = (function (stringArray) {

    return (stringArray.map((x) => {

        return x.toUpperCase()

    }))
})(stringArray);
console.log("The strings to title caps in a string array: " + uppercases);

//Sum of all numbers in an array

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let SumArray = (function (arrayNumbers) {

    return (arrayNumbers.reduce((Total, x) => {

        return Total + x

    }, 0))
})(arrayNumbers);
console.log("Sum of all numbers in an array: " + SumArray);

//Return all the prime numbers in an array

let ArrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let PrimeArray = (function (ArrayNumber) {

    return (ArrayNumber.filter((x) => {

        for (i = 2; i < x; i++) {
            if (x % i === 0)
                return false
        }

        return true

    }))
})(ArrayNumber);
console.log("Prime numbers in an array: " + PrimeArray);

//Return all the palindromes in an array

let ArrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let PallindromeArray = (function (arrayNumber) {

    return (ArrayNumbers.filter((x) => {

        let temp = x + ""

        if ((temp.split('').reverse().join('')) === x + "")
            return true

        return false

    }))
})(ArrayNumbers);
console.log("Pallindrome numbers in an array: " + PallindromeArray);

//Return median of two sorted arrays of same size

let arrayNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayNumbers2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let Medianarray = function (array1, array2) {

    let result = []

    let lengthArray1 = arrayNumbers1.length

    let lengthArray2 = arrayNumbers2.length

    if (lengthArray1 % 2 === 0) {

        console.log("Median of an array 1: " + array1[lengthArray1 / 2])

    } else {

        console.log("Median of array 1: " + array1[(lengthArray1 + 1) / 2])
    }

    if (lengthArray2 % 2 === 0) {

        console.log("Median of array 2: " + array2[lengthArray2 / 2])

    } else {

        console.log("Median of array 2: " + array2[(lengthArray2 + 1) / 2])
    }

    return
}(arrayNumbers1, arrayNumbers2)

//Remove duplicates from an array

let arraywithDuplicates = [10, 9, 8, 7, 8, 10, 6, 5, 3, 2, 1, 5, 2, 1];
let ArrayDuplicates = ((arraywithDuplicates, index) => {

    return [...new Set(arraywithDuplicates)]

})(arraywithDuplicates)
console.log("Duplicates from an array" + ArrayDuplicates);

//Rotate an array by k times and return the rotated array

let arrayNumbers3 = [1, 2, 3, 4, 5, 6];
let ArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrayNumbers3, 3)
console.log("Array roatated by k times: " + ArrayShifted)


