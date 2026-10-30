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

