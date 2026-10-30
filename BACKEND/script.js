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

