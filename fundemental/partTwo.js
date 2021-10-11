// Scrict Mode
// strict mode helps create errors for us to see. and forbids us to do stuff.

"use strict";

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

// const friends = ['sergio', 'miguel', 'jackie'];

// //add elements
// const newLength = friends.push('jay')
// console.log(friends);
// console.log(newLength);

// friends.unshift('john')
// console.log(friends);

// //remove elements
// const popped = friends.pop() //last E
// console.log(friends);
// console.log(popped);

// friends.shift()
// console.log(friends);

// console.log(friends.indexOf('jackie'));

// console.log(friends.includes('jackie'))

// ----------------------------------------------------------------------

// coding challenge #2

// let bills = [125,555,44]

// let tips = []
// let total = []

// const calcTip = (bill) => {
//     const tip = bill <= 300 && bill >= 50 ? bill *.15 : bill * .2
//     tips.push(tip)
//     console.log(tips);
//     total.push(bill + tip)
//     console.log('total:',total);
// }

// calcTip(bills[0])
// calcTip(bills[1])
// calcTip(bills[2])

// //instructor V
// const calctip = function(bill){
//     return bill <= 300 && bill >= 50 ? bill *.15 : bill * .2
// }

// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])]
// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// console.log(bills, tips, totals);

//-----------------------------------------------------------------------

// Intro to objects
/*
const daniel = {
    firstName: 'Daniel',
    lastName: 'Campo',
    age: 2040-1994,
    job: 'TSO',
    friends: ['jackie', 'sergio', 'miguel']
}

console.log(daniel);

console.log(daniel.lastName);
console.log(daniel['lastName']);

const nameKey = 'Name';
console.log(daniel['first' + nameKey]);
console.log(daniel['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Daniel? Choose between First or last name, age, job, and Friends');

if(daniel[interestedIn]){
    console.log(daniel[interestedIn]);
}else{
    console.log('Woops you messed up, please refresh and try again.');
}

daniel.location = 'Austin,TX';
daniel['instagram'] = '@danielcampo1';
console.log(daniel);

const danielsFriends = prompt(`Daniel has daniel ${daniel.friends.length}, and his best friend is??`);

if(danielsFriends === daniel.friends[0]){
    console.log(`YAY you are right Jackie is correct`);
}else{
    console.log('oooofff nice try! try again');
}
*/

// --------------------------------------------------------------------

// OBj methods

// functions are values & methods are properties
/*
const daniel = {
    firstName: 'Daniel',
    lastName: 'Campo',
    birthYear: 1994,
    job: 'TSO',
    friends: ['jackie', 'sergio', 'miguel'],
    hasDriversLicense: false,

    // calcAge: function(birthYear) {
    //     return 2040 - birthYear
    // }

    calcAge: function() {
        this.age = 2040 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${daniel.firstName} is a ${daniel.calcAge()} years old teacher. and he has ${this.hasDriversLicense ? 'a' : 'no' } drivers licences.`
    }
};


console.log(daniel.calcAge())
// console.log(daniel['calcAge'](1994))
console.log(daniel.getSummary());


//Challenge
// jonas is a 46 year old techer. and he has a/no drivers licenses
*/

// -------------------------------------------------------------------

//challenge 3
/*
const Mark = {
    fullName: 'mark miller',
    weight: 78,
    height: 1.69,
    calcBmi: function() {
        this.BMI = this.weight / this.height ** 2
        return this.BMI
    }
}

const John = {
    fullName: 'John SMith',
    weight: 92,
    height: 1.95,
    calcBmi: function() {
        this.BMI = this.weight / this.height ** 2
        return this.BMI
    }
}

console.log(Mark.calcBmi());
console.log(John.calcBmi());

console.log(`${Mark.fullName} has a BMI of ${Math.round(Mark.BMI)} & ${John.fullName} has a BMI of ${Math.round(John.BMI)}`);
*/

// -----------------------------------------------------------------------------

// Loops

// For loop keeps running while condition is true.
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lift weights repetition ${rep} 🏋️‍♂️`);
// }
/* 

const daniel = [
    'Daniel',
    'Campo',
    2040-1993,
    'TSO',
    ['jackie','miguel','clairssa'],
    true
];

const types = [];


for(let i = 0; i < daniel.length; i++) {
    //reading daniel array
    console.log(daniel[i], typeof daniel[i]);

    //filling types array
    types[i] = typeof daniel[i]
}

console.log(types);

const years = [ 1993,1997,2019,2021,1969 ]
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2040 - years[i])
}

console.log(ages);

// continue and break
//  continue - exit current iteration of the loop and continue to the next onemptied.length
//  break - completely terminate the loop

console.log('-----only strings-----');
for(let i = 0; i < daniel.length; i++) {
    if(typeof daniel[i] !== 'string') continue;

    console.log(daniel[i], typeof daniel[i]);

}

console.log('-----only numbers-----');
for(let i = 0; i < daniel.length; i++) {
    if(typeof daniel[i] === 'number') break;

    console.log(daniel[i], typeof daniel[i]);

}

--------------------------- */

//looping backwards
/*

const daniel = [
    'Daniel',
    'Campo',
    2040-1993,
    'TSO',
    ['jackie','miguel','clairssa'],
    true
];

for(let i = daniel.length - 1; i >= 0; i--) {
    console.log(i, daniel[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`----starting exercise ${exercise}` );

    for(let rep = 1; rep < 6; rep++){
        console.log(`${exercise}: Lifting weight repetition ${rep}`);
    }
 }
 -----------------------------------*/

//while loop

//  for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep}`);
// }
/* 

let rep = 1
while(rep <=10){
    // console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++
};

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6){
    console.log(`you rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1
    if(dice === 6 )console.log('Loop is about to end ...');
}

-------------------------------------*/

//challenge #4
/* 
const bills = [ 22,295,176,440,37,105,10,1100,86,52 ]

let tips = []
let total = []


const calcTip = (bill) => {
    const tip = bill <= 300 && bill >= 50 ? bill *.15 : bill * .2
    tips.push(tip)
    total.push(bill + tip)
}


for(let i = 0; i < bills.length; i++){
    calcTip(bills[i])
}

console.log(tips);
console.log('totals:', total); 

*/
