// Express.js Freamework:

// Introduction to Express.js 
// express js ek npm package ha
// framework
// manages everything from receiving the request and giving the response



// Setting up a basic Express application.
// Routing
// Middleware
// Request and Response handling.
// Error handling



// Setting up a basic Express application.
// Routing


const express = require('express');
const app = express()

// routes create karna
// app.get(route, requestHandler) // requestHandler bhiek middleware hota ha
app.get("/", function(req,res){
  res.send("Champion hu mein");
})

app.get("/profile", function(req,res){
  res.send("Champion uska coach bhi");
})

app.listen(3000);

// nodemon ek npm package ha jo automatically server ko, 
// restart kar deta ha jab bhi hum code me changes karte ha.



// Middleware


// jab bhi server request accept karta ha wha se route ke, 
// beech pohuchne tak agar aap us request ko beech me rokte ho,
// aur kuch perform karte ho to ye element middleware khelata ha 

const express = require('express');
const app = express()

app.use(function(req, res, next){
  console.log("middleware called");
  next();
});

app.use(function(req, res, next){
  console.log("middleware dubara called");
  next();
});

app.get("/", function(req,res){
  res.send("Champion hu mein");
})

app.get("/profile", function(req,res){
  res.send("Champion uska coach bhi");
})


app.listen(3000);



// Error handling

const express = require('express');
const app = express()

app.use(function(req, res, next){
  console.log("middleware called");
  next();
});

app.use(function(req, res, next){
  console.log("middleware dubara called");
  next();
});

app.get("/", function(req,res){
  res.send("Champion hu mein");
})

app.get("/profile", function(req,res,next){
  return next(new Error("Something went wrong!")); // ye frontend pe show hoga
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // ye backend pe show hoga
});

app.listen(3000);
