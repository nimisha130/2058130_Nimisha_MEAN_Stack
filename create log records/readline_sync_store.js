let fs = require("fs");

let readline = require("readline-sync");

function infoRead(){
    let fname = readline.question("Enter your First Name ");
    
    let lname = readline.question("Enter your Last Name ");
    
    let gender = readline.question("Enter your Gender ");

    let email = readline.questionEMail("Enter your Email ");

    let dateTime = Date();

    console.log(fname);
    console.log(lname);
    debugger;
    console.log(gender);
    console.log(email);
    debugger;
    console.log(dateTime);
    debugger;

    let readValues = JSON.parse(fs.readFileSync("read.json").toString());

    readValues.push({"First Name":fname,"Last Name":lname,"Gender":gender,"Email":email,"DateTime":dateTime});

    fs.writeFileSync("read.json",JSON.stringify(readValues));
}
infoRead();