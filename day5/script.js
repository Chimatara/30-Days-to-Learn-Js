

// EXCERCISE: LEVEL 1
// 1. Declare an empty array;
const emptyArray = [];

//2. Declare an array with more than 5 number of elements
const fruits = ['Kiwi', 'watermelon', 'avocado', 'pear', 'grapes', 'apple']

//3. Find the length of your array
console.log(fruits.length)

//4. Get the first item, the middle item and the last item of the array
let firstItem = fruits[0];
let middleItem = fruits.length / 2 //come back to this
let lastItem = fruits[fruits.length - 1]
console.log(firstItem, middleItem, lastItem) 


//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [{name: 'Tara', age: 25}, 'Plantain', 'playing', 7, true, [1, 2, 3, 4], '']

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[itCompanies.length / 2]
let lastCompany = itCompanies[itCompanies.length - 1]
console.log(firstCompany, middleCompany, lastCompany) 

//10 Print out each company
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//11 Change each company name to uppercase one by one and print them out\
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies} are big IT companies`)
//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Facebook')){
    console.log( 'Facebook')
}else{
    console.log('Company not found')
}
//14 Filter out companies which have more than one 'o' without the filter method
// come back to this

//15 Sort the array using sort() method
let sortArray = itCompanies.sort()
console.log(sortArray)

//16 Reverse the array using reverse() method
let reverseArray = itCompanies.reverse()
console.log(itCompanies)

//17 Slice out the first 3 companies from the array
let sliceArray = itCompanies.slice(0, 3)

//18 Slice out the last 3 companies from the array
let sliceArray2 = itCompanies.slice(itCompanies.length - 3, 3)

//19 Slice out the middle IT company or companies from the array

//20 Remove the first IT company from the array
 itCompanies.shift()
console.log(itCompanies)

//21 Remove the middle IT company or companies from the array

//22 Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

//23 Remove all IT companies



// LEVEL 2
//1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
// const regex = words.replace()
console.log(words)
console.log(words.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if(shoppingCart.includes('Meat')){
    console.log('already exists')
} else{
    shoppingCart.shift('Meat')
}
// add Sugar at the end of you shopping cart if it has not been already added
if(shoppingCart.includes('Sugar')){
    console.log('already exists')
} else{
    shoppingCart.push('Sugar')
}
// remove 'Honey' if you are allergic to honey
// shoppingCart.splice(2, 0)
console.log(shoppingCart)

// modify Tea to 'Green Tea'


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd].join().split(' ')
console.log(fullStack)


// LEVEL 3
//1. The following is an array of 10 students ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
// Find the median age(one middle item or two middle items divided by two)
let medianAge;
if(ages % 2 === 0){
    let middleOne = ages[ages.length / 2 -1]
    let middleTwo = ages[ages.length / 2]
     medianAge = (middleOne + middleTwo) / 2
}else{
  medianAge = ages[Math.floor(ages.length / 2)]
}
console.log(medianAge)

// Find the average age(all items divided by number of items)
let sumOfAges = 0
for(let i = 0; i < ages.length; i++){
    sumOfAges += ages[i]
}
let averageAge = sumOfAges /ages.length
// Find the range of the ages(max minus min)
let range = maxAge - minAge
console.log(range)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the


// 2. Find the middle country(ies) in the countries array

//3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half