// Task No 1
document.write(`<h1>Task No 1</h1>`)
var studentName1 = [];

var studentName2 = [];

var stringArray = ['apple', 'banana', 'cherry'];

var numberArray = [1, 2, 3, 4, 5];

var booleanArray = [true, false, true];

var mixedArray = ['apple', 2, true, 'banana', false, 5];

var educationQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

document.write("<h2>Qualifications:</h2>");

for (i=0 ; i < educationQualifications.length ; i++) {
    document.write(educationQualifications[i] + "<br>");
}

// Task No 2
document.write(`<h1>Task No 2</h1>`)
var student3 = ["Michael" , "John" , "Tony"]
var score = [320 , 230 , 480]
var totalMark = 500
for (i = 0; i < student3.length; i++){
    var perc = score[i]/totalMark*100
    document.write(`Score of ${student3[i]} is ${score[i]} Percentage: ${perc}% <br>`)
}

// Task No 3
document.write(`<h1>Task No 3</h1>`)
var colorName = ["Red" , "Blue" , "Green"]
document.write(`<h2>${colorName}</h2>`)

// Add to beginning
var colorAddStart = prompt("Enter the color you want to add to the beginning:" , "White")
colorName.unshift(colorAddStart);
document.write(`Adding ${colorAddStart} now updatted array : ${colorName} <br>`)

// Add to last
var colorAddEnd = prompt("Enter the color you want to add to the end:" , "Brown")
colorName.push(colorAddEnd)
document.write(`Adding ${colorAddEnd} now updatted array : ${colorName} <br>`)

// Add to beginning
var colorAddStart2 = prompt("Enter the color you want to add to the beginning:" , "Orange")
colorName.unshift(colorAddStart2)
document.write(`Adding ${colorAddStart2} now updatted array : ${colorName} <br>`)

// Add to beginning
var colorAddStart3 = prompt("Enter the color you want to add to the beginning:" , "Green")
colorName.unshift(colorAddStart3)
document.write(`Adding ${colorAddStart3} now updatted array : ${colorName} <br>`)

// Delete 1st element
colorName.shift(1)
document.write(`Deleting the first color in array now updatted array : ${colorName} <br>`)
colorName.pop(1)
document.write(`Deleting the last color in array now updatted array : ${colorName} <br>`)
var indexAdd = prompt("Enter a index number to add color on this position" , "0")
var indexAddColor = ("Enter a color you want to add in index position" , "Purple")
colorName.splice(indexAdd , 0 , indexAddColor)
document.write(`Adding the color in index number ${indexAdd} now updatted array : ${colorName} <br>`)
var indexDel = prompt("Enter a index number to delete color on this position" , "0")
var indexDelCol = prompt("How many colors you want to delete")
colorName.splice(indexDelCol, 1 )
document.write(`Delete the color in index number ${indexDel} now updatted array : ${colorName} <br>`)

// Task No 4
document.write(`<h1>Task No 4</h1>`)
var studentScores = [320, 230, 480, 120, 95, 90];
studentScores.sort((a, b) => a - b);
document.write(`Sorted student scores: ${studentScores}`)

// Task No 5
document.write(`<h1>Task No 5</h1>`)
document.write("<h2>Cities list</h2>")
var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
document.write(cities + "<br>")
document.write("<h2>Selected cities list:</h2>")
var select = cities.slice(0,3)
document.write(select)

// Task No 6
document.write(`<h1>Task No 6</h1>`)
document.write("Array:" + "<br>")
var arr = ["This", "is", "my", "cat"];
document.write(arr + "<br><br>")
document.write("String:" + "<br>")
var singleString = arr.join(" ");
document.write(singleString);

// Task No 7
document.write(`<h1>Task No 7</h1>`)
document.write("Devices:" + "<br>")
// FCFC
var vip1="Out:"
var devices1=["Keyboard" , "Mouse" , "Printer" , "Moniter"]
for (i = 0; i < devices1.length; i++){
    document.write(vip1 + "<br>")
    document.write(devices1[i] + "<br>")
}
// LILO
document.write(`<h1>Task No 8</h1>`)
var vip2="Out:"
var devices2=["Keyboard" , "Mouse" , "Printer" , "Moniter"]
for (i = devices2.length - 1; i >= 0; i--){
    document.write(vip2 + "<br>")
    document.write(devices2[i] + "<br>")
}

// Task No 10
document.write(`<h1>Task No 10</h1>`)
var mobile_manu = "<select><option>Apple</option><option>Samsung</option><option>Motorola</option><option>Nokia</option><option>Sony</option><option>Haier</option></select>"
document.write(mobile_manu)