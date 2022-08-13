'use strict';
/* // function declaration
function calcAge(birthYear) {
    return 2021 - birthYear;
}
// function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age = calcAge2(1991);
console.log(age); */

// arrow function
// function expression
/* const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
//arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age = calcAge3(1991);
console.log(age);

const yearUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
const yearRetirement = yearUntilRetirement(2000);
console.log(yearRetirement);

const yearUntilRetirement1 = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retire in ${retirement}`;
}
console.log(yearUntilRetirement1(2000, "dat")); */
// arrow function

/* const ageCalculation = (birthYear, year) => {
    const age = year - birthYear;
    return age;
}
console.log(ageCalculation(2000, 2022));
 */
//coding challenge 1 section 2

/* const calcAverage = (firstScore, secondScore, thirdScore) => {
    return (firstScore + secondScore + thirdScore) / 3;
}
function checkWinner(avgDolphins, avgKoala) {
    if (avgDolphins >= 2 * avgKoala) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoala})`);
    }
    else if (avgKoala >= avgDolphins * 2) {
        console.log(`Koaloa win (${avgKoala} vs ${avgDolphins})`);
    }
    else {
        console.log(`no one wins the game`);
    }

}
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)); */

/* const friends = ["dat", "duc", "cuong"];
const years = new Array(1991, 1992, 1993, 1994, 1995, 1996, 1997);
function dat(a) {
    return a;
}
function duc(a) {
    return a + 1;
}
const functions = [dat, duc];
console.log(functions[1](10));//working like a function pointer in c
//console.log(friends[friends.length - 1]);

const dat1 = ["dat", "pham", 2022 - 2000, "teacher", friends];
console.log(dat1[4][1]); */
/* const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const year = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(year)); */
/* const friends = ["dat", "duc", "cuong"];
friends.push("jat");
console.log(friends);
friends.pop();
friends.unshift("dat1");
//friends.findIndex("jat")
const a = friends.find((element, index) => { if (element === 'dat') return index; });
console.log(a); */
/* const bills = [125, 555, 44];
const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
}
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total); */
// object
/* const jonas = {
    firstName: "dat",
    lastName: "pham ngoc",
    age: 2022 - 2000,
    job: "teacher",
    friends: ["duc", "cuong", "beo"]
};
const objectArray = [
    {
        firstName: "dat",
        age: 20
    },
    {
        firstName: "duc",
        age: 21
    }
];
console.log(objectArray[1].firstName);
console.log(jonas['lastName']);


const nameKey = 'Name';
console.log(jonas['first' + nameKey]);

jonas.location = "viet nam";
jonas["twitter"] = "phamngocdat@gmail.com";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]};`) */
/* const jonas = {
    firstName: "dat",
    lastName: "pham ngoc",
    birthYear: 2000,
    job: "teacher",
    friends: ["duc", "cuong", "beo"],
    hasDriverLicense: true,
     calcAge: function (birthYear) {
        return 2022 - birthYear;
    }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    summary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver licens`
    }
};
console.log(jonas.calcAge());
console.log(jonas.summary()); */
// coding challenge section 3
/* const Mark = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
}
const John = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
}
console.log(`${John.calcBMI() > Mark.calcBMI() ? "John's BMI " : "Mark's BMI"} (${John.calcBMI() > Mark.calcBMI() ? John.calcBMI() : Mark.calcBMI()}) is higher than ${John.calcBMI() > Mark.calcBMI() ? "Mark's" : "John's"} (${John.calcBMI() > Mark.calcBMI() ? Mark.calcBMI() : John.calcBMI()}) `) */
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`haha ${rep}`);
} */
/* const jonas = [
    "dat",
    "pham ngoc",
    2022 - 2000,
    "teacher",
    ["duc", "cuong", "beo"]
];
const types = [];
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]);
    types.push(jonas[i]);
}
console.log(types); */
//continue and break is the same in c language
/* let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
} */
/* let dice = Math.trunc(Math.random() * 6);
// console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("loop ends");
    }
} */
/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2
}
function calcAvr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / (arr.length);
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);
console.log(calcAvr(total)); */












