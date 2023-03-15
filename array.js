// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
arr1=[3,7,24,90,12]
console.log(arr1.slice(-1))
// arr2 = [true, "green", "where",12,56]
arr2=[true,"green", "where",12,56]
console.log(arr2.slice(-1))

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];
myPets=["Cow", "Bird", "Snake", "Dog"]
console.log(myPets.toString())

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3=[-5, 9, 5, 3, 2, -3, 6, 8, 4, 1]
let sortedAl=arr3.sort()
console.log(sortedAl)

// Write a program to remove duplicates from the following array.
// Console the array without duplicates,
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
var arr=["apple", "mango", "apple", "orange", "mango", "mango"]
function xDuplicates(arr){
    return[...new Set(arr)]
}
console.log(xDuplicates(arr))

// console another array that only contains the duplicates
function outstand(arr){
    return arr.filter((item,index) =>arr.indexOf(item)!=index)
}
console.log(outstand(arr))
// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
let arr5=["the", "way", "x", 4]
if(arr5.includes("way")){
console.log("way")}
else{console.log("the search word was not found")}

// Write a JS script to sort the following string
// let word = "sevink"
let word= "sevink"
console.log(word.split("").sort().join(""))















