// ================ Q#01

// var city;
// city = prompt("Enter city name");

// if (city === "Karachi") {
//     document.write("<p>Welcome to the city of lights</p>")
// }
// else if (city === 'Lahore') {
//     document.write("<p>Welcome to the city Lahore</p>")
// }

// ================ Q#02

// var gender;
// gender = prompt("Enter your gender:");
// if (gender === "Male") {
//     document.write("<p>Good morning, Sir!</p>")
// }
// else if (gender === "Female") {
//     document.write("<p>Good morning, Ma'am!</p>")
// }

// ================ Q#03

// var color;
// gender = prompt("Enter your gender:");
// if (gender === "red") {
//     document.write("<p>Must Stop!</p>")
// }
// else if (gender === "yellow") {
//     document.write("<p>ready To Move</p>")
// }
// else if (gender === "green") {
//     document.write("<p>Move Now</p>")
// }

// ================ Q#04

// var fuel;
// gender = parseFloat(prompt("Remaining Fuel:"));
// if (gender <= 0.25) {
//     document.write("<p>Please refill the fuel in your car.</p>")
// }

// ================ Q#05

// a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// c.var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// // d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// // e. 
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// // f.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// ================ Q#06
// var total, num1, num2, num3, obtTotal, per, grade, remarks;

// total = 300

// num1 = parseInt(prompt("Enter marks for subject 1"));
// num2 = parseInt(prompt("Enter marks for subject 2"));
// num3 = parseInt(prompt("Enter marks for subject 3"));

// obtTotal = num1 + num2 + num3;

// per = Math.round((obtTotal / total) * 100);

// if (per >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// }
// else if (per >= 70) {
//     grade = "A";
//     remarks = "Good";

// }
// else if (per >= 60) {
//     grade = "A";
//     remarks = "You need to improve"

// }
// else {
//     grade = "Fail"
//     remarks = "Sorry"
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("<h3>Total Marks: 300</h3>");
// document.write("<h3>Marks Obtained: " + obtTotal + "</h3>");
// document.write("<h3>Grade: " + grade + "</h3>");
// document.write("<h3>Remarks: " + remarks + "</h3>");