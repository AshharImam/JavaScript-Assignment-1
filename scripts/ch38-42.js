// ================ Q#1

// function power(a, b) {
//     var ans = 1;
//     for (var i = 0; i < b; i++) {
//         ans *= a;
//     }
//     return ans;
// }

// var base, pow;
// base = Number(prompt("Enter base"));
// pow = Number(prompt("Enter power"));
// document.write(`power ${pow} to base ${base} is ${power(base, pow)}`);

// ================ Q#2

// function leapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return "It's a leap year";
//     } else {
//         return "It's not a leap year";
//     }
// }

// var year = Number(prompt("Enter year"));
// document.write(`${leapYear(year)}`);

// ================ Q#3

// function calcArea(S, a, b, c) {
//     return (S * (S - a) * (S - b) * (S - c));
// }

// function calcS(a, b, c) {
//     return ((a + b + c) / 2);
// }

// var input = (prompt("Enter sides as comma separated (a,b,c)"));
// var sides = input.split(',');
// var a, b, c;
// a = Number(sides[0]);
// b = Number(sides[1]);
// c = Number(sides[2]);
// S = calcS(a, b, c);
// A = calcArea(S, a, b, c);
// document.write(`Area of triangle is with sides ${a} ${b} ${c} is ${A}`);

// ================ Q#4

// function average(a, b, c) {
//     return ((a + b + c) / 3);
// }

// function percentage(average) {
//     return ((average) * 100);
// }

// function init() {
//     var input = (prompt("Enter marks out of 100 as comma separated (a,b,c)"));
//     var sides = input.split(',');
//     var a, b, c;
//     a = Number(sides[0]);
//     b = Number(sides[1]);
//     c = Number(sides[2]);
//     average = average(a, b, c);
//     percentage = percentage(average);
//     document.write(`Average: ${average}, Percentage: ${percentage}%`);
// }

// init();

// ================ Q#5

// function indexOf(arr, char) {
//     for (var i in arr) {
//         if (arr[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// var arr = ['a', 'b', 'c', 'd', 'e'];
// var index = indexOf(arr, 'c');
// document.write(`index: ${index} of 'c' in ${arr}`);

// ================ Q#6

// function deleteVowles(scentence) {
//     scentence = scentence.replace(/[aeiou]/gi, '');
//     return scentence;
// }

// var input = (prompt("Enter scentence"));
// document.write(`<p>${input}</p>`);
// if (input.length <= 25) {
//     var scen = deleteVowles(input);
//     document.write(`<p>${scen}</p>`);

// }

// ================ Q#7

