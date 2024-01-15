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


// // 5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`The even numbers are ${i}`)
    }
}

