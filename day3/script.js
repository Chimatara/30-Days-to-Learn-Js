// Excercises: Level 1

// Questions

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types
let firstName = 'Chimatara';
let lastName = 'Kalu';
let country = 'Nigeria';
let city = 'Lagos';
let age = 25;
let isMarried = false;
let year = 1998;

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)


//2. Check if type of '10' is equal to 10
let numString = '10';
let num = 10;
console.log(typeof numString == num)


//3. Check if parseInt('9.8') is equal to 10
let number = 10;
let numFloat = 9.8;
let numInt = parseInt(numFloat)
console.log(numInt == number)

//4. Boolean value is either true or false.
// i. Write three JavaScript statement which provide truthy value.
// ii. Write three JavaScript statement which provide falsy value.

// Truthy Values
let myName = 'Tara';
let hobbies = ['Baking', 'singing', 'coding'];
let numberOfKnownLanguages = 3;

// Fasly Values
let isEngaged;
let drinks = null;
let canDance = '';

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3 true
// 4 >= 3 false
// 4 < 3 false
// 4 <= 3 false
// 4 == 4 true
// 4 === 4 true
// 4 != 4 false
// 4 !== 4 false
// 4 != '4' false
// 4 == '4' true
// 4 === '4' false
// Find the length of python and jargon and make a falsy comparison statement.

let pythonLength = 50;
let jargonLength;
console.log(pythonLength == jargonLength) 

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

console.log('----------------------------------')
// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12  true
// 4 > 3 && 10 > 12   false
// 4 > 3 || 10 < 12   true
// 4 > 3 || 10 > 12   true
// !(4 > 3)   false
// !(4 < 3)    true
// !(false)    false
// !(4 > 3 && 10 < 12) false 
// !(4 > 3 && 10 > 12)  false
// !(4 === '4')  true
// There is no 'on' in both dragon and python false

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12 )
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3) )
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

console.log('----------------------------------')

// 7. Use the Date object to do the following activities
const date = new Date();
// What is the year today?
console.log(date.getFullYear())
// What is the month today as a number?
console.log(date.getMonth())
// What is the date today?
console.log(date.getDay())
// What is the day today as a number?
console.log(date.getDate())
// What is the hours now?
console.log(date.getHours());
// What is the minutes now?
console.log(date.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime())