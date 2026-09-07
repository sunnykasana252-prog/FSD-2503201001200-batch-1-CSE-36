
const fs = require("fs");

fs.writeFile("Student.txt", "Hello, This is a Sunny named file", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File successfully created");
    }
});