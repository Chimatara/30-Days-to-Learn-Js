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


// Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
let triangleBase = prompt('Enter the triangle base', 0)
let height = prompt('Enter the triangle height', 0)
console.log('Area of triangle is ' + 0.5 * triangleBase * height)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12

let sideA = prompt('Enter Side A', 0)
let sideB = prompt('Enter Side B', 0)
let sideC= prompt('Enter Side C', 0)
console.log('Theperimeter of a triangle is ' + sideA + sideB + sideC);


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)
let rectangleLength = prompt('Enter rectangle length ', 0);
let rectangleWidth= prompt('Enter rectangle width', 0);
let rectangleArea = rectangleLength * rectangleWidth;
let rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
console.log(rectangleArea, rectanglePerimeter)


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('Please enter circle radius', 0)
let circleArea = Math.PI * radius ** 2;
let circleCircumference = 2 * Math.PI * radius
console.log('The area of circle is ', circleArea)
console.log('The circumfernce of the circle is ', circleCircumference)



// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope (m) is the coefficient of x
const slope = 2;

// To find x-intercept, set y = 0 and solve for x
// 0 = 2x - 2
// x = 1
const xIntercept = 1;

// To find y-intercept, set x = 0 and solve for y
// y = 2(0) - 2
// y = -2
const yIntercept = -2;
console.log("Slope (m):", slope);
console.log("X-Intercept:", xIntercept);
console.log("Y-Intercept:", yIntercept);


// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10

let slope2 = (y2 - y1) / (x2 -x1)
console.log('the slope between the points are ', slope2)


// 7. Compare the slope of above two questions.
// ANSWER
// In both cases, the slopes are equal, which is consistent with the fact that in a linear equation of the form y=mx+b, the coefficient 
// m represents the slope of the line. Therefore, it makes sense that the slope calculated using the formula for two points on the line matches the coefficient of 
// x in the linear equation.

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0
// Given quadratic equation: y = x^2 + 6x + 9

function calculateY(x) {
    // Calculate y for the given x
    return x**2 + 6*x + 9;
}

// Test different x values
const xValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// Calculate and print y values for each x
for (const x of xValues) {
    const y = calculateY(x);
    console.log(`For x = ${x}, y = ${y}`);
    
    // Check if y is 0
    if (y === 0) {
        console.log(`y is 0 at x = ${x}`);
    }
}


// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt('Enter number of hours', 0)
let ratePerHour = prompt('Enter rate per hour ', 0)
console.log('Your weekly earnings are' + hours * ratePerHour)


// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let nameLength = 7
let nameResult = nameLength > 7 ? 'Your name is long' : 'Your name is short';
console.log(nameResult)


// 11. Compare your first name length and your family name length and you should get this output.
let myFirstName = 'Chimatara'
let myLastName = 'Kalu'