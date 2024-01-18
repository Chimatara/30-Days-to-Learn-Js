// // LEVEL 1

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// /FOR LOOP
for(let i = 0; i <= 10; i++){
    console.log(i)
}
// WHILE LOOP
let i = 0
while(i <= 10){
    console.log(i)
    i++  
}
// DO WHILE LOOP
let index = 0
do{
    console.log(index)
    i++
    break
}while (index <= 10)



// // 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// // FOR LOOP
for(let i = 10; i >= 0; i--){
    console.log(i)
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
// // WHILE LOOP
// let j = 10
// while(j >= 0){
//     console.log(j)
//    j++  
// }
// // DO WHILE LOOP
// let k = 10
// do{
//     // console.log(index)
//     k++
//     break
// }while (k >= 0)


// // 3. Iterate 0 to n using for loop
// let n = 5
// for(let i = 0; i < n; i++){
//     // console.log(i)
// }


// // 4. Write a loop that makes the following pattern using console.log():
// // #
// // ##
// // ###
// // ####
// // #####
// // ######
// // #######
for (let i = 0; i < 7; i++) {
    let line = '';

    for (let j = 1; j <= i; j++) {
        line += '#';
    }

    console.log(line);
}


// 6 Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for(let i = 0; i <= 10; i++){
    let sum = `${i} x ${i}`
    console.log(`${sum} = ${i * i}`)
}


// 7. Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

for(let i = 0; i <= 10; i++){
    let exponentialTwo = i ** 2;
    let exponentialThree = i ** 3;
    let combine = `${exponentialTwo} ${exponentialThree}`
    console.log(`${i} ${combine}`)
}


//7. Use for loop to iterate from 0 to 100 and print only even numbers.
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`The even numbers are ${i}`)
    }
}


// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log(`The odd numbers are ${i}`) //check back
    }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers
let sum = 0
for(let i = 0; i <= 100; i++){
  sum += i
}
console.log(`The sum of the loop is ${sum}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvenNum = 0
let sumOfOddNum = 0
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        sumOfEvenNum += i
    }
  }
  console.log('sum of even numbers is' + ' ' + sumOfEvenNum)

for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 || i % 5 === 0){
        sumOfOddNum += i
    }
  }
  console.log('sum of odd numbers is' + ' ' + sumOfOddNum)

// Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumbers.push(randomNumber);
}
console.log("Randon Numbers:", randomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueRandomNumbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    uniqueRandomNumbers.push(randomNumber);
}
console.log("Randon Numbers:", uniqueRandomNumbers);



// Develop a small script which generate a six characters random id
let randomId = "";
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
}
console.log("Random ID:", randomId);



// LEVEL 2

// Develop a small script which generate any number of characters random id:
let numberOfCharacters = 8;
let anotherRandomId = "";
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < numberOfCharacters; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    anotherRandomId += characters.charAt(randomIndex);
}
console.log("Random ID:", anotherRandomId);


// Use the countries array to create the following array of arrays:
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  for(let i = 0; i < countries.length; i++){
    console.log(countries[i].toUpperCase())
  }


//   Using the above countries array, create an array for countries length'
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let newArray = []
for(let i = 0; i < countries.length; i++){
    newArray.push(countries[i].length)
  }
  console.log(newArray)

//   in above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countriesWithLand = []
countries.forEach(country => {
if(country.includes('land')){
countriesWithLand.push(country)
}
})
console.log('the countries with land are ' + countriesWithLand)


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia
let countriesWithIA = []
   countries.forEach(country => {
    if(country.includes('ia')){
    countriesWithIA.push(country)
}
})
console.log('the countries with land are ' + countriesWithIA)


// Using the above countries array, find the country containing the biggest number of characters
countries.sort()
countries.forEach(country => {
console.log()
})