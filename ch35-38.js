// ================ Q#1

// function getDate() {
//     var date = Date()
//     document.write(`<p>${date}</p>`)
// }
// getDate();

// ================ Q#2

// function prinName() {
//     var frst, scnd;
//     frst = prompt("Enter your first name:")
//     scnd = prompt("Enter your last name:")
//     document.write(`<p>Good Eevening ${frst} ${scnd}</p>`)

// }
// prinName()

// ================ Q#3

// function sum() {
//     var frst, scnd;
//     frst = Number(prompt("Enter first number:"));
//     scnd = Number(prompt("Enter second number:"));
//     document.write(`<p>sum of ${frst} and ${scnd} ${frst + scnd}</p>`);

// }
// sum();

// ================ Q#4

// frst = Number(prompt("Enter first number:"));
// scnd = Number(prompt("Enter second number:"));
// op = prompt("Enter operator:");
// sum(frst, scnd, op);

// function sum(frst, scnd, op) {
//     if (op === "+") {
//         res = frst + scnd;
//     } else if (op === "-") {
//         res = frst - scnd;
//     } else if (op === "*") {
//         res = frst * scnd;
//     } else if (op === "/") {
//         res = frst / scnd;
//     }
//     document.write(`<p>${frst} ${op} ${scnd} = ${res}</p>`);

// }

// ================ Q#5

// var frst = Number(prompt("Enter number:"));
// square(frst)
// function square(sq) {
//     document.write(`<p>${sq * sq}</p>`);
// }

// ================ Q#6

// function fact(num) {
//     var f = 1;
//     for (var i = 1; i <= num; num++) {
//         f = f * i;
//     }
//     document.write(`<p>Factorial of ${num} is ${f}</p>`);
// }
// var frst = Number(prompt("Enter number:"));
// fact(frst);

// ================ Q#7

// function fn() {
//     var frst = Number(prompt("Enter number:"));
//     var scnd = Number(prompt("Enter number:"));
//     for (; frst <= scnd; frst++) {
//         document.write(`<p>${frst}</p>`);
//     }
// }

// fn();

// ================ Q#8

// function calcHyp(base, perp) {
//     function square(sq) {
//             return sq*sq;
//     }
//     base = square(base);
//     perp = square(perp);
//     hyp = Math.sqrt(base+perp)
//     return hyp;
// }

// var frst = Number(prompt("Enter base:"));
// var scnd = Number(prompt("Enter perpendicular:"));
// document.write(`<p>${calcHyp(frst, scnd)}</p>`);

// ================ Q#9

// function area(width, height) {
//     return width * height;
// }
// var frst = 10;
// var scnd = 10;
// document.write(`<p>Area by passing variable${area(frst, scnd)}</p>`);
// document.write(`<p>Area by passing values${area(10, 10)}</p>`);

// ================ Q#10

// function palindrome(str) {
//     var rev = str.split('').reverse().join('');
//     if (rev === str) {
//         document.write(`<p>string is palindrome</p>`);
//     } else {
//         document.write(`<p>string is not a palindrome</p>`);

//     }
// }

// var frst = (prompt("Enter string to check palindrome"));
// palindrome(frst);

// ================ Q#11

