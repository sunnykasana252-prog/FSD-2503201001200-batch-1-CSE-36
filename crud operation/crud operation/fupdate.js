const fs = require("fs");

fs.appendFile("Student.txt", "\nThis is new updated content", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File successfully updated");
    }
});