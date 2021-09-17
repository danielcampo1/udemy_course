console.log("hello");

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1994
// console.log(typeof year);

// -------------------------------

// let age = 30;
// // mutated variable
// age = 31;

// const birthYear = 1994
// // birthYear = 1991

// var job = "programmer"
// job = "teacher"

// lastName = 'Campo'
// console.log(lastName);


//------------------------------------------

// BASIC OPERATORS

// const now = 2040
// const ageDaniel = now - 1994
// const ageJackie = now - 2020
// console.log(ageDaniel, ageJackie);

// console.log(ageDaniel * 2, ageDaniel / 10, 2 ** 3);

// const firstName = "daniel";
// const lastName = 'Campo';
// console.log(firstName + ' ' + lastName);

// // Assignment operator
// let x = 10 + 5 
// x += 10 // x = x + 10 = 25
// x *= 4  // x= x * 4 = 100
// x ++ // x = x + 1
// x -- // x = x - 1
// console.log(x);

// // Comparison Operators
// console.log(ageDaniel > ageJackie);
// console.log(ageJackie >= 21);

// console.log(now - 1990 > now - 1994);

//----------------------------------------------

// OPERATOR PRECEDENCE

// const now = 2040
// const ageDaniel = now - 1994
// const ageJackie = now - 2020

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// averageAge = (ageDaniel + ageJackie) / 2
// console.log(ageDaniel, ageJackie, averageAge);


//-------------------------------------------------

// CODING CHALLENGE #1

// let markW = 78
// let markH= 1.69
// let johnW = 92
// let johnH = 1.95

// const markBMI = markW / markH ** 2 
// const johnBMI = johnW / johnH ** 2 
// const markHigherBMI = markBMI > johnBMI

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);

// ----------------------------------------------------


// STRINGS AND TEMPLATE LITERALS

// const firstName = 'Daniel';
// const job = 'security officer';
// const birthYear = '1994'
// const year = '2021'

// const daniel = "I'am " + firstName + ' , a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(daniel);

// const danielNew = `I'm ${firstName}, a funny guy thats ${year - birthYear} years old ${job}`
// console.log(danielNew);

// console.log(' strings with \n\
// mutilple \n\
// string');

// console.log(`hello
// my 
// name is danie`);

//---------------------------------------------------------

// TAKING DECISIONS: IF/ELSE

// const age = 12

// if(age >= 14){
//     console.log(`Jackie can start driving!`);
// }else{
//     const yearsLeft = 15 - age
//     console.log(`jackie is not old enough, shes got ${yearsLeft} years left!`);
// }

// let century;
// const birthYear = 2012;
// if(birthYear <= 2000){
//      century = 20
// }else{
//     century = 21
// }

// console.log(century);

//-----------------------------------------------------------


// CODING CHALLENGE #2


// let markW = 78
// let markH= 1.69
// let johnW = 92
// let johnH = 1.95


// let markW = 95  
// let markH= 1.88
// let johnW = 85
// let johnH = 1.76


// const markBMI = markW / markH ** 2 
// const johnBMI = johnW / johnH ** 2 

// console.log(markBMI);
// console.log(johnBMI);

// if(markBMI > johnBMI){
//     console.log(`Mark's BMI is higher then Johns by ${markBMI - johnBMI}!`);
// }else{
//     console.log(`John's BMI is higher then Marks by ${johnBMI - markBMI}!`);
// };

//-------------------------------------------------------------

//TYPE CONVERSION AND COERCION


//type conversion
// const inputYear = '1994';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('daniel'));

//Coercion

// console.log('23' - '10' - 3); //converts to number
// console.log('23' + '10' + 3); // concats and converts to string

//------------------------------------------------------------

//true and falsy

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('daniel'));
console.log(Boolean({}));

const money = 23;
if(money) {
    console.log('dont spend it all');
} else {
    console.log('get a job');
}

let height;
if(height){
    console.log('YAY!!!!!!!!!!!!');
}else{
    console.log('not defined homie!');
}