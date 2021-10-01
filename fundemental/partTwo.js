// Scrict Mode
// strict mode helps create errors for us to see. and forbids us to do stuff.

'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true
// if(hasDriversLicense) console.log('i can drive!!');

//  unexpected strict mode reserced word with scrict mode
// const interface = 'audio';
// const private = 564

// --------------------------------------------------------

// functions

// what is a function??
    // is a variable but a chunk of code that can be recalled
    // functions can recieve data and return data.
    
// function logger() {
//     console.log('My name is Daniel!');
// }

// // calling, running, or invoking function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

//------------------------------------------------------------

// Functions Declarations vs expressions

// // Declaration
// function calcAge1(birthYear){
//     return 2040 - birthYear;
// }

// const age1 = calcAge1(1994);
// console.log(age1);

// //expression
// const calcAge2 = function (birthYear) {
//     return 2040 - birthYear
// }
// const age2 = calcAge2(1994)

// console.log(age1, age2);

//-------------------------------------------------------------------

// Arrow Function

// const calcAge3 = birthYear => 2040 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1997, 'Daniel'))
// console.log(yearsUntilRetirement(1965, 'Daniel'))

//---------------------------------------------------------------

// Functions calling other functions

// function cutFruitPieces(fruit){
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges){
//    const appliePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${appliePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
//     console.log(fruitProcessor(2, 3));

//-----------------------------------------------------------------

// coding challenge 1

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3
// }
// // data1
// // const avgDolphins = calcAverage(44,23,71)
// // const avgKoalas = calcAverage(65,54,49)

// // data2
// const avgDolphins = calcAverage(85,54,71)
// const avgKoalas = calcAverage(23,34,27)

// function checkWinner(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`DOLPHINS WIN!! ${avgDolphins} - ${avgKoalas}`);
//     }else if(avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas WIN!! ${avgKoalas} - ${avgKoalas}`);
//     }else{
//             console.log("rematch no winner");
//         }
//     }

// checkWinner(avgDolphins,avgKoalas)

//----------------------------------------------------------------

// Intro to Arrays

// const friend1 = 'sergio'
// const friend2 = 'miguel'
// const friend3 = 'jackie'

// const friends = ['sergio', 'miguel', 'jackie'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length -1]);

// const years = new Array(1993,1991,1994,2020)
// console.log(years);

//---------------------------------------------------------------------

// Basic array operations(methods)

const friends = ['sergio', 'miguel', 'jackie'];

//add elements
const newLength = friends.push('jay') 
console.log(friends);
console.log(newLength);

friends.unshift('john')
console.log(friends);

//remove elements
const popped = friends.pop() //last E
console.log(friends);
console.log(popped);

friends.shift()
console.log(friends);

console.log(friends.indexOf('jackie'));

console.log(friends.includes('jackie'))