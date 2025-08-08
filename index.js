// CHAPTER 14-16       ARRAYS

// QUESTION 1

var studentNames = [""];

// QUESTION 2

var studentNames = "";

// QUESTION 3

var fruits = ["Apple", "Banana", "Mango"];

// QUESTION 4

var numbers = [10, 20, 30, 40];

// QUESTION 5

var flags = [true, false, true, false];

// QUESTION 6

var mixedArray = ["Zaid", 18, true, null];

// QUESTION 7

var educationQualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phill",
  "phD",
];

// QUESTION 8

var student_names = ["Zaid", "Sohaib", "Sufyan"];

var student_score = [480, 320, 480];

var total_marks = 500;

for (var i = 0; i < student_names.length; i++) {
  var percentage = (student_score[i] / total_marks) * 100;
  console.log("Student:" + student_names[i]);
  console.log("Score:" + student_score[i] + "out of" + total_marks);
  console.log("percentage: " + percentage.toFixed(2) + "%\n");
}

// QUESTION 9

var colors = ["red", "green", "yellow", "blue"];

var add = +prompt("enter the index number at u want to enter new color");
var color_name = prompt("color name....");
colors.splice(add, 0, color_name);
document.write(colors + "<br><br><br>");

var remove = +prompt("color idex you want to remove.");
var color_remove = prompt("how many color u want to remove");

colors.splice(remove, color_remove);
document.write(colors + "<br><br><br>");

// QUESTION 10
var students_score = [220, 120, 320, 420];
document.write("score of sudets " + students_score + "<br><br>");

students_score.sort(function (a, b) {
  return a - b;
});
document.write(
  "score of sudets after sorting " + students_score + "<br><br><br>"
);

// QUESTION 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

doument.write("Cities list: ");
doument.write(cities.join(", ") + "<br><br>");

var selectedCities = cities.slice(2, 4);

doument.write("Selected cities list:");
doument.write(selectedCities.join(", ") + "<br><br><br>");

//question 12
var arr = ["this", "is", "my", "cat"];
doument.write("String : " + arr.join(", ") + "<br><br><br>");

//question 13
var devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("Devices: " + devices.join(", ") + "<br><br>");

document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br>");
document.write("Out: " + devices.shift() + "<br><br><br>");

//question 14
var devices = [];

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("Devices: " + devices.join(", ") + "<br><br>");

document.write("Out: " + devices.pop() + "<br>");
document.write("Out: " + devices.pop() + "<br>");
document.write("Out: " + devices.pop() + "<br>");
document.write("Out: " + devices.pop() + "<br><br><br>");

//question 15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");
