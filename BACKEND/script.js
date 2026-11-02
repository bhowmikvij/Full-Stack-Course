// initialize a project with npm
// express install

// setting up parsers for form


// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", function(req,res){
//     res.send("chal rha hai");
// })

// app.listen(3000,function(){
//     console.log("its running");
// })


// setting up ejs for ejs pages

// setting up public static files


// dynamic routing
//    dynamic routing 
//    how to get data coming from frontend at backend route



const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req,res){
    res.send("chal rha hai");
})

app.listen(3000,function(){
    console.log("its running");
})

