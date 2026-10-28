// Fundamentals of Javascript:
// arrays and objects
// functions return
// async js coding
// forEach, map, filter, find, indexOf



// ARRAYS


// // forEach
// var arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val + " hello");
// })

// // map
// var arr = [1,2,3,4,5];
// var newarr = arr.map(function(val){
//     return val+12
// })
// console.log(newarr);
// // [13, 14, 15, 16, 17]

// // filter
// var arr = [1,2,3,4,5];
// var newarr = arr.filter(function(val){
//     if (val > 3) {return true;}
//     else return false;
// })
// console.log(newarr);
// // [4,5]

// // find
// var arr = [1,2,3,4,5];
// var newarr = arr.find(function(val){
//     if (val == 2) return val;
// })
// console.log(newarr);



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

