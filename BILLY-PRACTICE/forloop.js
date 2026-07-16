const DAYS = 6;
const LIMIT = 30;
let studentReport = [28, 73, 12, 39, 20,10]

// for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }



// with while loop
// let i = 0

// while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);

//     }
//     i++;
// }


// using foreach

studentReport.forEach(function(item) {
    if (item < LIMIT) {
        console.log(item);
    }
});