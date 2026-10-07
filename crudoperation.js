//CRUD=create  read update delete
const fs = require("fs");

// create a blank file

fs.writeFile("student.txt", "Hello, this is a student file", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File is successfully created");
    }
});

//redin a file content

fs.readFile("student.txt","utf-8",(err,data)=>{
    if (err) {
        console.log(err);
    } 
    else{
        console.log("File content readed");
        console.log(data1);
    }

});

//updating file

fs.appendFile("student.txt","for CSE student",(err)=>{
 if(err) throw err 
 else{
    console.log("File successfully updated");
 }
});

// delete operation

fs.unlink("student.txt",(err)=>{
   if(err) throw err
   else{
    console.log("file successfully deleted");
   }
});

