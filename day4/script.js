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
   console.log(`you are ${yourAge - myAge} older than me`) 
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


// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number');
let checkEvennumber = parseInt(number, 10)
if(checkEvennumber % 0){
    console.log(`${checkEvennumber} is an even number`)
} else{
    console.log(`${checkEvennumber} is an odd number`)

}



// LEVEL 2
// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let scoores;
if(scoores >= 80){
    console.log('A')
}else if(scoores >= 70 && scoores <= 79){
    console.log('B')
}else if(scoores >= 60 && scoores <= 69){
    console.log('D')
}else if(scoores >= 50 && scoores <= 59){
    console.log('E')
}else{
    console.log('F')

}


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let date = new Date().getMonth()

let autumn = ['September', 'October', 'November']
let winter = ['December', 'January', 'February']
let spring = ['March', 'April', 'May']
let summer = ['July', 'Auguest', 'June']