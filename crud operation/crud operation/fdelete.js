const fs = require("fs");

fs.unlink("Student.txt", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("File successfully deleted");
    }
});