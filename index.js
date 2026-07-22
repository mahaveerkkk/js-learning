function showResult(name, marks){
    if (name === "" || marks === "") {
        return "Please enter both name and marks.";
    }
    if (marks < 0 || marks > 100) {
        return "Marks should be between 0 and 100.";
    }
    if (marks >= 90) {
        grade ="A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else if (marks >= 50) {
        grade = "E";
    }else {
        grade = "F";
    }
    if (grade==="F") {
        status = "Fail";
    } else {
        status = "Pass";
    }
     
    // return name + " -> " + grade + " -> " + status;
    console.log(`
=========================
Student Report
=========================
Name   : ${name}
Marks  : ${marks}
Grade  : ${grade}
Result : ${status}
=========================
`);
}


// +
// console.log("=====================================");console.log("\n");
// console.log("Student Report");console.log("\n");
// console.log("=====================================");console.log("\n");

// console.log("Name:",name);
// console.log("Marks:",marks);
// console.log("Grade:",result);
// console.log("Status:",status);


//  console.log(name, "->",grade, "->", status);
console.log(showResult("John Doe", 85));