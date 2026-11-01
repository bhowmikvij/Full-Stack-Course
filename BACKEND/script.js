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

//   res.send('Hello World')
// })

app.listen(3000);

// nodemon ek npm package ha jo automatically server ko, 
// restart kar deta ha jab bhi hum code me changes karte ha.



// Middleware


