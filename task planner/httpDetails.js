let fs = require("fs");

let http = require ("http");

let url = require("url");

let index = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h2>Welcome to Task Planner Project</h2>

    <a href="indexPage">Add Task</a> |

    <a href="listTaskTable">List all Tasks</a> |

    <a href="taskDelete">Delete Tasks</a>

</body>
</html>
`

let indexPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Welcome to Task Planner</h2>
    <br/>

    <h4><u>Add Task</u></h4>

    <form action="checkTask">
    <label>Employee Id:</label>
    <input type="text" name="empId"/><br/>
    <label>Task Id:</label>
    <input type="text" name="taskId"/><br/>
    <label>Task:</label>
    <input type="textarea" name="task"/><br/>
    <label>Deadline:</label>
    <input type="date" name="deadline"/><br/>
<br/>
    <input type="submit" value="Add Task"/>
    <input type="reset" value="Clear"/>

    </form> 
    <br/>
    <a href="index">Back</a>
    
</body>
</html>
`
let listTaskTable = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Task Table</h2>
    <form action = "listTasks">
    <input type="button" value="List All Tasks"/>
    </form>
    <br/>
    <a href="index">Back</a>
</body>
</html>
`

let taskDelete = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Delete Tasks</h3>

    <form action="checkDelete">
        <label>Task Id:</label>
        <input type="text" name="removeTask"/>
        <input type="submit" value="Delete"/>
    </form>
    <br/>
    <a href="index">Back</a>
</body>
</html>
`

let server = http.createServer((request,response)=>{
        let urlInfo = url.parse(request.url,true);

        let readData = JSON.parse(fs.readFileSync("read.json").toString());

        if(urlInfo.path!="/favicon.ico"){
            //console.log(urlInfo);

        }else if(urlInfo.pathname != "/checkTask"){
            let tasks = urlInfo.query;
            let result = tasks.taskId;
            let details = readData.find(l=>l.result == tasks.taskId);
            if(details != undefined){
                response.write("Task Id must be unique!");
                response.write(indexPage);
            }else{
                readData.push({"empId":tasks.empId,"taskId":tasks.taskId,"task":tasks.task,"deadline":tasks.deadline});
                fs.writeFileSync("readData.json",JSON.stringify(readData));
                response.write("Task added successfully");
                response.write(indexPage);
            }
        
        }else if(urlInfo.pathname =="/checkDelete"){
            let deleteData = urlInfo.query;
            let result = deleteData.taskId;
            let readData = JSON.parse(fs.readFileSync("read.json").toString());
            let deleteTask = readData.findIndex(i=>i.taskId == result);
            
            if(index == -1){
                response.write("Task cannot be found!");
                response.write(taskDelete);
            }else{
                readData.splice(index,1);
                fs.writeFileSync("read.json",JSON.stringify(readData));
                response.write("Task deleted successfully!");
                response.write(taskDelete);
            }

        }else if(urlInfo.pathname =="/listTasks"){
            let readData = JSON.parse(fs.readFileSync("read.json").toString());
            let contents = "";
            let startTable = "<table border = 1><tr><th>Employee Id</th><th>Task Id</th><th>Task</th><th>Deadline</th></tr>"
            let endTable = "</table>";
            readData.forEach(data=>{
                contents += "<tr><td>"+data.empId+"</td><td>"+data.taskId+"</td><td>"+data.task+"</td></td>"+data.deadline+"</td></tr>"
            })
            response.write(listTaskTable);

        }else{
            response.write(index);
        }

    response.end();
    
})



server.listen(9090,()=>console.log("Server is running is on port number 9090"));