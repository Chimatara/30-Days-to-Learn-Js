// LEVEL 1

// Declare a function fullName and it print out your full name.
function fullName(){
  console.log('My name is Chimatara Kalu')
}
fullName()


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNames(){
    let firstName = 'Chimatara';
    let lastName = 'Kalu';
    let fullName = `${firstName} ${lastName}`
    console.log(fullName)
}
fullNames()


// Declare a function addNumbers and it takes two two parameters and it returns sum
function addNumbers(num1, num2){
 let sum = num1 + num2;
 return sum
}
console.log(addNumbers(15, 25))


// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle
function areaOfTriangle(l,w){
let area = l * w;
return area;
}
console.log(areaOfTriangle(2, 5))


// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle
function trianglePerimeter(l, w){
    let perimeter = 2 * (l * w);
    return perimeter;
}
console.log(trianglePerimeter(5, 5))


// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism
function retangleVolume(l, w, h){
    let volume = l * w * h;
    return volume;
}
console.log(retangleVolume(5, 5))


// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let area = Math.floor(Math.PI * r ** 2);
    return area;
    }
    console.log(areaOfCircle(2))


// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumference = 2 * Math.PI * r;
    return circumference;
    }
    console.log(circumOfCircle(5))


// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density
function density(m, v){
    let density = m / v;
    return density;
}
console.log(density(20, 2))


// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed
function speed(td, tt){
let speed = td / tt;
return speed;
}
console.log(speed(200, 4))


// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight
function weight(m, g){
    let weight = m * g;
    return weight;
}
console.log(weight(20, 2))


// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(centigrade){
    let formular = (centigrade * 9 / 5) + 32 + 'oF'
    return formular;
}
console.log(convertCelsiusToFahrenheit(50))


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(w, h){
    const heightInMeters = h / 100
    const bmi = w / (heightInMeters * heightInMeters) + 'kg/m2'
    if(bmi < 18.5) {
        return 'Underweight'
    }
    else if(bmi >= 18.5 && bmi <= 24.9) 
    {
        return 'Normalweight'
    }
    else if(bmi >= 25 && bmi <=29.9){
        return 'Overweight'
    }
    else{
        return 'obese'
    }
}
console.log(bmi(50, 175))



// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    const months = month.toLowerCase();

    if (["january", "february", "december"].includes(months)) {
        return "Winter";
    } else if (["march", "april", "may"].includes(months)) {
        return "Spring";
    } else if (["june", "july", "august"].includes(months)) {
        return "Summer";
    } else if (["september", "october", "november"].includes(months)) {
        return "Autumn";
    } else {
        return "Invalid month";
    }
}
console.log(checkSeason('April'))


// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
    
}
console.log(findMax(12, 3, 6))



// LEVEL 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation
function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
}
const a = 5;
const b = -3;
const c = 5;
const x = 1;
const y = 2;

const result = solveLinEquation(a, b, c, x, y);
console.log(result)



// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation
// COPIED
// function solveQuadEquation(a, b, c) {
    // Calculate the discriminant
//     const discriminant = b ** 2 - 4 * a * c;

//     // Check if the discriminant is negative (no real roots)
//     if (discriminant < 0) {
//         return "No real roots";
//     }

//     // Calculate the two possible roots
//     const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//     // Return the roots
//     return [root1, root2];
// }

// // Example usage:
// const a = 2;
// const b = -7;
// const c = 3;

// const roots = solveQuadEquation(a, b, c);
// console.log(`The roots of the quadratic equation are: ${roots}`);

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array
function printArray(arr){
for(let i = 0; i < arr.length; i++)
console.log(arr[i])
}
printArray([2, 4, 6, 8])


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object
function showDateTime() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
    
    console.log(formattedDateTime);
}
showDateTime();


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray
function capitalizeArray(arr){
    let capitalizedarray = []
    for(let i = 0; i < arr.length; i++){
        capitalizedarray.push(arr[i].toUpperCase())
    }
    return capitalizedarray;
}
let myArray = ['orange', 'banana', 'pear', 'kiwi']
console.log(capitalizeArray(myArray))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item, itemArray){
    itemArray = itemArray || []
    itemArray.push(item)
    return itemArray;
}
let myItem = ['Bett', 'shrank', 'Sthul']
let addition = 'Tish'
console.log(addItem(addition, myItem))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index, removeItemAtIndex){
     removeItemAtIndex =  removeItemAtIndex || []
    for(let i = 0; i < index.length; i++){
      removeItemAtIndex.pop(index[i])
    }
    return removeItemAtIndex;
}
let t = ['q', 'b', 'c']
let myIndex = 1
console.log(removeItem(myIndex, t))
// will come back to this

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number){
    let sum = 0
    for(let i = 1; i <= number; i++){
     sum = sum + i
    }
    return sum;
}
console.log(sumOfNumbers(5))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
    let sum = 0;
  
    for (let i = 1; i <= number; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  const myresult = sumOfOdds(7);
  console.log(result); 
  

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num){
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
  
    return sum; 
}
let evenSummation = sumOfEven(4)
console.log(evenSummation)

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
function evensAndOdds(integer){
    let evenCount = 0;
    let oddCount = 0
    for(let i = 1; i <= integer; i++){
      if(i % 2 == 0){
        evenCount++
      }else{
        oddCount++
      }
    }
    return {
        even: evenCount,
        odd: oddCount
    }
}
console.log(evensAndOdds(11))


