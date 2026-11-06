// // Fundamentals of Javascript:
// // arrays and objects
// // functions return
// // async js coding
// // forEach, map, filter, find, indexOf



// ARRAYS


// forEach
var arr = [1,2,3,4,5];
arr.forEach(function(val){
    console.log(val + " hello");
})

// map
var arr = [1,2,3,4,5];
var newarr = arr.map(function(val){
    return val+12
})
console.log(newarr);
// [13, 14, 15, 16, 17]

// filter
var arr = [1,2,3,4,5];
var newarr = arr.filter(function(val){
    if (val > 3) {return true;}
    else return false;
})
console.log(newarr);
// [4,5]

// find
var arr = [1,2,3,4,5];
var newarr = arr.find(function(val){
    if (val == 2) return val;
})
console.log(newarr);



// OBJECTS


var obj = {
    name: "Bhowmik Vij",
    age: 19
}  
Object.freeze(obj);
obj.age = 25



// RETURN


function abcd(){
    return 12;
}
var ans = abcd();



// ASYNC JS


// line by line code chale isey kahte hai synchronous code

// jo bhi code asunc nature ka ho,usey side stack mein bhej
// do and agle code ko chalao jo bhi sync nature ka ho, jab bhi
// saara syn code, chal jaye, tab check karo ki async code
// complete hua ya nhi and agar wo complete hua ho 
// usey main stack mein lao and chala do 



// ----------------------------------------------------------------------------------------------------


// Node.js Basics:
// Introduction to Node.js
// Installation of Node.js and npm
// Working with modules
// File system operations
// Understanding HTTP module



// BASICS


// v8 bana ha C++ mein, v8 engine ko google ne banaya ha, 
// v8 engine javascript ko machine code mein convert karta ha.
// hum js ka code likhte ha, v8 engine us 
// code ko machine code mein convert karta ha

// working with node and npm 
// npm init
// node basic usage



// File system operations - writefile, appendfile, copyfile, rename, unlink, rmdir, rm


const fs = require('fs');

// writefile
// appendfile - append file bas jo likha hota ha usme aage kar deta 
//              otherwise write or append me koi khasfarak nhi ha
// copyfile
// rename
// unlink
// rmdir, rm - if you want to remove copy folder
// http and https module



// writefile

fs.writeFile("hey.txt", "hey kese ho",function(err){
    if(err) console.error(err);
    else console.log("Done");
})



// appendFile


fs.appendFile("hey.txt", ", meto acha hu",function(err){
    if(err) console.error(err);
    else console.log("Done");
})



// rename


fs.rename("hey.txt", "hello.txt", function(err) {
    if (err) console.error(err);
    else console.log("Done");
})



// copyfile


fs.copyFile("hello.txt", "./copy/copyOfHello.txt", function(err) {
    if (err) console.error(err);
    else console.log("Done");
})



// unlink


fs.unlink("copy/copyOfHello.txt", function(err) {
    if (err) console.error(err);
    else console.log("Done");
})



// rmdir, rm


fs.rmdir("./copy", function(err) {
    if (err) console.error(err);
    else console.log("Done");
})

// we can directly remove folder by using rmdir if the folder is empty
// but if there is a file in that folder so we have to use {recursive:true option} in rm function

fs.rm("./copy", { recursive: true }, function(err) {
    if (err) console.error(err);
    else console.log("Done");
})



// Understanding HTTP module


// http and https module


const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);



// -------------------------------------------------------------------------------------



// NPM understanding

// npm - node package manager


// installing and unistalling anything basics & advanced
// install -> npm i packageKaNaam
// unistall -> npm uninstall packageKaNaam


// understanding node_modules


// dependencies- packages and packages ki dependencies
// devdependencies - aise packages jo sirf development me kaam
//                   aayenge par jab app ban jayega aur uplaod ho 
//                   jayega tab hum in packages ko use nhi kar rhe honge


// scripts - understanding default scripts PATH and custom scripts



console.log("hello world");



// --------------------------------------------------------------------------------------



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
const app1 = express()

app1.use(function(req, res, next){
  console.log("middleware called"); // ye backend pe show hoga
  next();
});

app1.use(function(req, res, next){
  console.log("middleware dubara called"); // ye backend pe show hoga
  next();
});

app1.get("/", function(req,res){
  res.send("Champion hu mein");
})

app1.get("/profile", function(req,res){
  res.send("Champion uska coach bhi");
})


app1.listen(3000);



// Error handling

const express = require('express');
const app2 = express()

app2.use(function(req, res, next){
  console.log("middleware called");
  next();
});

app2.use(function(req, res, next){
  console.log("middleware dubara called");
  next();
});

app2.get("/", function(req,res){
  res.send("Champion hu mein");
})

app2.get("/profile", function(req,res,next){
  return next(new Error("Something went wrong!")); // ye frontend pe show hoga
})

app2.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // ye backend pe show hoga
});

app2.listen(3000);



// -------------------------------------------------------------------------------------



// Form handling and working with the form 
// handle backend process of forms and making sure the data coming from any frontend 
// library, framework, templating engines, we still handle it at the backend


// session cookie

// hum log kuch bhi data frontend par browser par rakh skte hai and jab bhi aap kuchh
// bhi request backend pae karoge we FE par saved data automatically backend par chala jaayega.
// user ko logged in rakhne ke liye 
// (accept all cookies) we see on every website


// express.json, express.urlencoded

const express = require('express');
const app3 = express()

app3.use(express.json());
app3.use(express.urlencoded({ extended: true }));

app3.get("/", function(req,res){
  res.send("Champion hu mein");
})

app3.get("/profile", function(req,res,next){
  return next(new Error("Something went wrong!")); // ye frontend pe show hoga
})

app3.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // ye backend pe show hoga
});

app3.listen(3000);

// tumhe to bheja tha plain  text par server ko mila blob which is not directly readable
// ab is cheej ko handle karna padega ki hum us blob ko waapas se readable kar sake



// --------------------------------------------------------------------------------------



// express install

// setting up parsers for form


const express = require('express');
const app4 = express();

app4.use(express.json());
app4.use(express.urlencoded({ extended: true }));

app4.get("/", function(req,res){
    res.send("chal rha hai");
})

app4.listen(3000,function(){
    console.log("its running");
})



// setting up ejs for ejs pages
//    install ejs form npm
//    setup ejs as a view engine


const express = require('express');
const app5 = express();

app5.use(express.json());
app5.use(express.urlencoded({ extended: true }));
app5.set('view engine', 'ejs');

app5.get("/", function(req,res){
    res.render("index");
})

app5.listen(3000,function(){
    console.log("its running");
})


// setting up public static files


const express = require('express'); //
const app6 = express(); 
const path = require('path');

app6.use(express.json()); // this uses for forms
app6.use(express.urlencoded({ extended: true })); // this uses for forms

app6.use(express.static(path.join(__dirname, 'public'))); // from this we can use public files and static files
app6.set('view engine', 'ejs'); // from this we can render ejs pages


app6.get("/", function(req,res){
    res.render("index"); // in this we render index pages, we can find that in views folder
})

app6.listen(3000,function(){
    console.log("its running");
})


// dynamic routing
//    dynamic routing 
//    how to get data coming from frontend at backend route

// hum log kai baar kuch routes dekhte hai unmein siraf ek hi hissa chane hota hai
// /author/harsh
// /author/harshita
// /author/harshika
// /author/harshikakabf

// /profile/harsh
// /profile/harshita

// steps follows
// 1. sabse pehele browser par jaao
// 2. url likhiye apna jo aapko chahiye and enter dabaaiye
// 3. ab us url route ko create kariye
// 4. res bhejiye kuch bhi
// 5. ab usi url ko agar dynamic banaana hai to realise karo konsa 
//    part dynamic hai aur us part ke aage route mein : lagado


const express = require('express'); 
const app7 = express(); 
const path = require('path');

app7.use(express.json()); 
app7.use(express.urlencoded({ extended: true })); 

app7.use(express.static(path.join(__dirname, 'public'))); 
app7.set('view engine', 'ejs'); 

app7.get("/", function(req,res){
    res.render("index"); 
})

app7.get("/profile/:username", function(req,res){
    res.send(`Welcome! ${req.params.username}`); // req.params.username; // this is how we can get the dynamic part of the url
})

app7.get("/author/:username/:age", function(req,res){
    // res.send(req.params); // only data will be shown in this
    res.send(`Welcome! ${req.params.username}, you are ${req.params.age} years old.`); 
})

app7.listen(3000,function(){
    console.log("its running");
})



// --------------------------------------------------------------------------------------



// DATA Storage:
//      aisa kuch jaha par hum saare users ki info store kar skte hai


// TYPES OF DBS
//      SQL | NoSQL
//      NoSQL - MongoDB = Objects ke form me data store karga like js

// What and Why


// Terminologies - collections, documents, schemas, keys, models

// There are two types of server in Backend
// Application Server, Database Server

// Application Server

// Database -> Collections -> Document
// Code
// -------------------------------------------------
// CODE                  DATABASE
// -------------------------------------------------
// mongoose.connect -> database create
// model create     -> collection
// CREATE code      -> document

