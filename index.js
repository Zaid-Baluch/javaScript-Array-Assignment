// CHAPTER 14-16       ARRAYS

// QUESTION 1

var studentNames = [];

// QUESTION 2

var studentNames = ();

// QUESTION 3

var fruits = ["Apple", "Banana", "Mango"];

// QUESTION 4

var numbers = [10, 20, 30, 40];

// QUESTION 5

var flags = [true, false, true, false];

// QUESTION 6

var mixedArray = ["Zaid", 18, true, null];

// QUESTION 7

var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phill", "phD"];

// QUESTION 8

var student_names = ["Zaid", "Sohaib", "Sufyan"];

var student_score = [480, 320, 480];

var total_marks = 500;

for (var i = 0; i <= student_names; i++){
    var percentage = (student_score[i] / total_marks) * 100;
    console.log("Student:" + student_names[i]);
    console.log("Score:" + student_score[i] + "out of" + total_marks);
}