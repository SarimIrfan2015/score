// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for (var i = 0; i < qualifications.length; i++) {
//     document.write((i + 1) + ") " + qualifications[i] + "<br>");
// }

// var studentNames = ["Ali", "Sarim", "Ahmed"];

// var studentScores = [420, 380, 450];

// var totalMarks = 500;

// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;

//     document.write(
//         "Score of " + studentNames[i] + " is " + studentScores[i] +
//         ". Percentage: " + percentage + "%<br>"
//     );
// }

// gfuygr

// Student names array
var studentNames = ["Ali", "Sara", "Ahmed"];

// Student scores array
var studentScores = [420, 380, 450];

var totalMarks = 500;

// Display result
for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;

    document.write("Score of " + studentNames[i] + " is " + studentScores[i] +
        ". Percentage: " + percentage + "%<br>");
}
