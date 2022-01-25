//1. Print odd numbers in an array

let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log("Odd Number in an array: " + arrayNumber.filter((x) => {

    return x % 2 !== 0

}))

//2.Convert all the strings to title caps in a string array

let stringArray = ["hello", "to", "all", "my", "friends", "its", "karthik"];

stringArray = stringArray.map((x) => {

    return x.toUpperCase()

})

console.log("The strings to title caps in a string array: " + stringArray)

//3.Sum of all numbers in an array

let arrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let sumArray = arrayNumbers.reduce((e, x) => {

    return e + x

}, 0)

console.log("Sum of all numbers in an array: " + sumArray)

//Return all the prime numbers in an array

let ArrayNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log("Prime Number in an array: " +
    ArrayNumber.filter((x) => {

        for (let i = 2; i < x; i++) {
            if (x % i === 0)
                return false;
        }
        return x !== 1;

    }))

//5.Return all the palindromes in an array

let ArrayNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log("Pallindrome Numbers in an array: " +
    ArrayNumbers.filter((x) => {

        let temp = x + "";

        if (temp.split('').reverse().join('') === x + "")
            return true

        return false

    }))