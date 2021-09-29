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

const calcAge3 = birthYear => 2040 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Daniel'))
console.log(yearsUntilRetirement(1965, 'Daniel'))