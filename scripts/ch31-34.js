// ================ Q#1

// var date = Date()
// document.write(`<p>${date}</p>`)

// ================ Q#2

// var date = new Date();
// var num = date.getMonth();
// var month = []
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// document.write(`<p>Current Month: ${month[num]}</p>`)

// ================ Q#3

// var date = new Date();
// var num = date.getDay();
// var day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
// document.write(`<p>Today is: ${day[num]}</p>`)

// ================ Q#4

// var date = new Date();
// var num = date.getDay();
// if (num === 0 || num === 6) {

//     document.write(`<p>Today is Fun Day</p>`)
// }
// else {
//     document.write(`<p>Normal working day</p>`)

// }

// ================ Q#5

// var date = new Date();
// var num = date.getDate();
// if (num < 16) {

//     document.write(`<p>First fifteen days of the month</p>`)
// }
// else {
//     document.write(`<p>Last days of the month</p>`)

// }

// ================ Q#6

// var date = new Date();
// var num = date.getTime();
// document.write(`<p>${date}</p>`)
// document.write(`<p>Elapsed milliseconds since January 1, 1970: ${num}</p>`)
// document.write(`<p>Elapsed minutes since January 1, 1970: ${num / (60 * 60 * 1000)}</p>`)

// ================ Q#7

// var date = new Date();
// var num = date.getHours();
// if (num > 11) {
//     document.write(`<p>It's PM,</p>`);
// } else if (num <= 11) {
//     document.write(`<p>It's AM,</p>`);
// }

// ================ Q#8

// var date = new Date(2020, 11, 31, 00, 00, 00);
// document.write(`<p>${date}</p>`)

// ================ Q#9

// var date = new Date(2020, 03, 24);
// var today = new Date();
// var one_day = 1000 * 60 * 60 * 24
// var d = date.getTime();
// var t = today.getTime();
// document.write(`<p>${Math.floor((t - d) / one_day)} days has passed since 1st Ramadan, 20202</p>`)

// ================ Q#10

// var today = new Date();
// var date = new Date(2015, 0, 1);
// var d = date.getTime();
// var t = today.getTime();
// var min = Math.floor((t - d) / (1000 * 60))
// document.write(`<p>referance date: ${today}</p>`)
// document.write(`<p>${min} </p>`)

// ================ Q#11

// var today = new Date();
// var h = today.getHours()
// var d = today.setHours(16);
// document.write(`<p>current date: ${today} </p>`)
// today.setHours(h);
// document.write(`<p>One Hour ago, it was ${today} </p>`)

// ================ Q#12

// var today = new Date();
// var h = today.getFullYear()
// document.write(`<p>current date: ${today} </p>`)
// today.setFullYear(1920);
// document.write(`<p>100 years ago, it was ${today} </p>`)

// ================ Q#13

// var today = new Date();
// var age = Number(prompt("Enter your age: "));
// var bYear = today.getFullYear() - age;
// document.write(`<p>Your age: ${age} </p>`)
// document.write(`<p>Birth Year: ${bYear} </p>`)


