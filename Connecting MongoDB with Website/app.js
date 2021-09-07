//load the modules

let express = require("express");

let mongoose = require ("mongoose");

let bodyParser = require("body-parser");

let cors = require("cors");

 

//url

let url = "mongodb://localhost:27017/tcsmean";

mongoose.pluralize(null);

 

var course = [];

 

//create the reference

let app = express();

 

app.use(bodyParser.json());

app.use(cors());

 

//connect the database it returns the promise object

mongoose.connect(url).

then(result=>console.log("Connected")).

catch(error=>console.log(error));

 

let db = mongoose.connection;

db.once("open",()=>{

    let courseSchema = mongoose.Schema({

        _id:Number,

        cname:String,

        cdesc:String,

        camount:Number

    });

 

    let courseModel = mongoose.model("Course",courseSchema);

 

    //add courses

    app.post("/addInfo",(request,response)=>{

        let courseData = request.body;

        course.push(courseData);

 

    let addData = new courseModel({_id:courseData,cname:courseData,cdesc:courseData,camount:courseData});

 

    courseModel.insertMany(addData,(err,result)=>{

        if(!err){

            console.log("Record added successfully");

        }else{

            console.log("Id must be unique");

        }

        

    })

 

    })

 

    //delete course

    app.get("/deleteInfo",(request,response)=>{

        var courseId = request.query.courseId;

 

    courseModel.deleteOne({_id:courseId},(err,result)=>{

        if(!err){

            if(result.deletedCount>0){

                console.log("Record deleted successfully");

            }else{

                console.log("Record not present");

            }

        }else{

            console.log(err);

        }

    })

        

    })

 

    //fetch courses

    app.get("/listCourses",(request,response)=>{

        

        let startTable = "<table border = 1><tr><th>Course Id</th><th>Course Name</th><th>Description</th><th>Amount</th></tr>"

        let tableContents = "";

        let endTable = "</table>"

 

        courseModel.find({},(err,doc)=>{

            if(!err){

                doc.forEach(rec=>{

                    tableContents+= "<tr><td>"+rec._id+"</td><td>"+rec.cname+"</td><td>"+rec.cdesc+"</td><td>"+rec.camount+"</td></tr>";

                })

            response.write(startTable+tableContents+endTable);

            }

            

        })

    })



    //update course

    app.get("/updateInfo",(request,response)=>{

        var updateData = request.query.camount;

        var courseId = request.query.courseId;

 

        courseModel.updateOne({_id:courseId},{$set:{camount:updateData}},(err,result)=>{

            if(!err){

                console.log(result)

                if(result.modifiedCount>0 || result.matchedCount>0){

                    console.log("Course updated successfully");

                }else{

                    console.log("Product didn't update");

                }

            }else{

                console.log(err);

            }       

        })

    })


})    



app.get("/",(request,response)=>{

    response.sendFile(__dirname+"index.html");

})

 

app.get("/deleteCourse",(request,response)=>{

    response.sendFile(__dirname+"deletecourse.html");

})

 

app.get("/listCourses",(request,response)=>{

    response.sendFile(__dirname+"fetchcourse.html");

})

 

app.get("/updateCourse",(request,response)=>{

    response.sendFile(__dirname+"updatecourse.html");

})

 

app.listen(9090,()=>console.log("Server running on port number 9090"))