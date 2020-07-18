// ================ Q#1

// document.write(`<p><a href="javascript:void(0)" onclick="alert('you have clicked a link')">Link to show alert box</a></p>`)

// ================ Q#2

// document.write(`<img src="images/photo-1511707171634-5f897ff02aa9.jpeg" alt="mob1"onclick="alert('Thank you for purchasing our product')" width="200px"><img src="images/2.jpg" alt="mob2" onclick="alert('Thank you for purchasing our product')">`)

// ================ Q#3

// function writeHtml() {
//     document.write(`<table>`)

//     document.write(`<thead>`)

//     document.write(`<tr><th>Roll No.</th><th>Name</th><th>Action</th></tr>`)

//     document.write(`</thead>`)
//     document.write(`<tbody id='table'>`)

//     for (var i = 0; i < 10; i++) {
//         document.write(`<tr id='${i}'><td>${i}</td><td>Student${i}</td><td><button onclick='deleteRow(${i})'>Delete</button></td></tr>`)
//     }

//     document.write(`</tbody>`)

//     document.write(`</table>`)
// }

// function deleteRow(i) {
//     var row = document.getElementById(i);
//     document.getElementById(i).parentNode.removeChild(row)
// }

// function init() {
//     writeHtml();
// }
// init();

// ================ Q#4

// document.write(`<img src="images/photo-1511707171634-5f897ff02aa9.jpeg" alt="mob1" onMouseout="src='images/photo-1511707171634-5f897ff02aa9.jpeg'" onMouseover="src='images/2.jpg'" width="200px">`)

// ================ Q#5

// document.write(`<p>Counter: <span id="counter">0</span></p><button onclick="inc()">increase</button><button onclick="dec()">decrease</button>`);

// function inc() {
//     var sp = document.getElementById('counter');
//     var num = Number(sp.textContent);
//     num++;
//     sp.textContent = num;
// }
// function dec() {
//     var sp = document.getElementById('counter');
//     var num = Number(sp.textContent);
//     num--;
//     sp.textContent = num;
// }

