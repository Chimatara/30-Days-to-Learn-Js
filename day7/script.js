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
