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
function checkSeason(month){
     
//    const season = 
}