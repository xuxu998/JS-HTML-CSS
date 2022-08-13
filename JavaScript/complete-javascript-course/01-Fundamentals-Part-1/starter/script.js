/* let js = "amazing";
console.log(40 + 8 + 23);
console.log("Jonas");
console.log(23);
let firstName = "Jonas";
console.log(firstName);
firstName = "pham ngoc dat";
console.log(firstName); */
/* true;
console.log(true); */

/* let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");
javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);
let year;
if (typeof (year) == "undefined")
    console.log("not defined yet");
year = 1998;
if (typeof (year) == "number")
    console.log("it is a year");
console.log(typeof year); */

/* let age = 30;
age = 31;
const birthYear = 1991;
lastName = "dat";
console.log(lastName);
 */
/* let now = 2037;
const ageJonas = now - 1991;
const ageDat = now - 2000;
console.log(ageJonas, ageDat);
console.log(ageDat * ageJonas, ageJonas / 10, 2 ** 3);
const firstName = "Jonas";
const lastName = "Schmedman";
console.log(firstName + " " + lastName);
console.log(ageDat >= 20);
const isFullAge = ageDat >= 18;
 */
/* const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
let markHigherBMI = false;
function BMI_Calculation(mass, height) {
    return BMI = mass / height ** 2;
}
if (BMI_Calculation(massJohn, heightJohn) > BMI_Calculation(massMark, heightMark))
    markHigherBMI = false;
else
    markHigherBMI = true;
console.log(BMI_Calculation(massJohn, heightJohn));
console.log(BMI_Calculation(massMark, heightMark));
console.log(markHigherBMI); */

/* const firstName = "dat";
const job = "teacher";
const birthYear = 2000;
const year = 2022;
const jonas = "I'm" + firstName + (year - birthYear) + "year old";
console.log(jonas);
const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);
console.log(`string with
multiple
lines`); */

/* const age = 17;
const isOldEnough = age >= 18;
console.log(age >= 18);
if (isOldEnough) {
    console.log("YES");
}
else {
    const yearLeft = 18 - age;
    console.log(`not old enough ${age}, need to wait ${yearLeft} left`);
} */

/* const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
let markHigherBMI = false;
function BMI_Calculation(mass, height) {
    return BMI = mass / height ** 2;
}
if (BMI_Calculation(massJohn, heightJohn) > BMI_Calculation(massMark, heightMark))
    console.log(`John's (${BMI_Calculation(massJohn, heightJohn)}) BMI is higher than Mark's (${BMI_Calculation(massMark, heightMark)})!`)
else
    console.log(`Mark's ${BMI_Calculation(massMark, heightMark)} BMI is higher than John's ${BMI_Calculation(massJohn, heightJohn)}!`) */
/* //type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
//type conversion
console.log("24" + 3 + "10");
console.log("24" - 3 - "10"); */

// 5 falsy values: 0, '' ,undefined,null,NaN
/* console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean({}));
const money = 0;
if (money) {
    console.log("dont spend it all");
}
else {
    console.log("you should get a job");
} */
/* const age = 18;
// == loose comparision because of having coersion automatically
// === strict comparision because of not having coersion automatically
// when comparing values, avoid loose comparision
if (age === 18) {
    console.log("you just became an adult");
}
if (age == 18) {
    console.log("this should give true value");
}
if (age == '18') {
    console.log("this also should give true value");
}
if (age === '18') {
    console.log("this should give false value");
}
else {
    console.log("this should give false value");
}
const favoriteNumber = Number(prompt("what is your favorite number?"));// prompt function always return a string
console.log(favoriteNumber);
if (favoriteNumber === 23) {
    console.log("23 is a great number");
}
else if (favoriteNumber === 7) {
    console.log("cool~.~");
}
else {
    console.log("hehe");
}
if (favoriteNumber !== 23) {
    console.log("why not 23?");
} */
// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);
// const shouldDrive = hasDriverLicense && hasGoodVision;
// console.log(shouldDrive);
// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// }
// else {
//     console.log("someone else should drive");
// }
/* const isTired = true;
const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;
console.log(shouldDrive);
if (shouldDrive) {
    console.log("Sarah is able to drive");
}
else {
    console.log("someone else should drive");
} */
/* const firstScoreDolphins = 97;
const secondScoreDolphins = 112;
const thirdScoreDolphins = 80;
const firstScoreKoala = 109;
const secondScoreKoala = 95;
const thirdScoreKoala = 50;
let isDolphinsGreaterThan100 = false;
let isKoalaGreaterThan100 = false;
let scoreDolphins;
let scoreKoala;
let isDolphinHigher = false;
let isKoalaHigher = false;
let draw = false;
function Average_Score(firstScore, secondScore, thirdScore) {
    return (firstScore + secondScore + thirdScore) / 3
}
scoreDolphins = Average_Score(firstScoreDolphins, secondScoreDolphins, thirdScoreDolphins);
if (scoreDolphins >= 100) {
    isDolphinsGreaterThan100 = true;
}
scoreKoala = Average_Score(firstScoreKoala, secondScoreKoala, thirdScoreKoala);
if (scoreKoala >= 100) {
    isKoalaGreaterThan100 = true;
}
if (scoreDolphins > scoreKoala) {
    isDolphinHigher = true;
    isKoalaHigher = false;
    draw = false;
}
else if (scoreKoala > scoreDolphins) {
    isDolphinHigher = false;
    isKoalaHigher = true;
    draw = false;
}
else if (scoreDolphins === scoreKoala) {
    isDolphinHigher = false;
    isKoalaHigher = false;
    draw = true;
}
if (isDolphinHigher && !isKoalaHigher && !draw) {
    if (isDolphinsGreaterThan100)
        console.log("Dolphins wins the game");
    else {
        console.log("no one wins the game");
        console.log(scoreDolphins, scoreKoala);
    }
}
else if (!isDolphinHigher && isKoalaHigher && !draw) {
    if (isKoalaGreaterThan100)
        console.log("Koala wins the game");
    else {
        console.log("no one wins the games");
    }
}
else if (draw) {
    if (isKoalaGreaterThan100 && isDolphinsGreaterThan100) {
        console.log("Draw");
        console.log(scoreDolphins, scoreKoala);
    }
    else {
        console.log("other wise");
    }
} */
/* const day = "monday";
switch (day) {
    case 'monday':// === strict comparision


}
// the same in c */
/* // ternary operator
const age = 23;
const isGreaterThan23 = age > 23 ? console.log("haha") : console.log("hehe"); */
/* const billValue = 430;
const tip = billValue <= 300 ? (billValue >= 50 ? 0.15 : 0.2) : 0.2;
const totalValue = billValue + billValue * tip;
console.log("totalValue:", totalValue, "Tip:", tip); */






