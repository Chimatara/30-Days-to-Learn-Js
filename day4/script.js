// EXCERCISES: LEVEL 1
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18

let age = prompt('Enter your age')
let userAge = parseInt(age,  10)
let eligibleAge = 18

if(userAge >= 18){
    console.log('You are old enough to drive')
} else{
    console.log(`you are left with ${eligibleAge - userAge} years to drive`)
}


// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = prompt('Enter your age')
let yourAge = prompt('Enter your age')
if(myAge === yourAge){
  console.log('We are agemates')
} else if(myAge > yourAge){
   console.log(`you are ${myAge - yourAge} older than me`) 
}else if(yourAge > myAge){
   console.log(`you are ${yourAge - myAge181} older than me`) 
}else{
    console.log('No proper number added')
}


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
let a = 4
let b = 3
if(a > b){
    console.log('a is greater than b')
}else{
    console.log('a is less than b')
}
// ternary operator.
(a > b) ? console.log('a is greater than b') :  console.log('a is less than b')