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
//    install ejs form npm
//    setup ejs as a view engine


// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

// app.get("/", function(req,res){
//     res.render("index");
// })

// app.listen(3000,function(){
//     console.log("its running");
// })


// setting up public static files


// const express = require('express'); //
// const app = express(); 
// const path = require('path');

// app.use(express.json()); // this uses for forms
// app.use(express.urlencoded({ extended: true })); // this uses for forms

// app.use(express.static(path.join(__dirname, 'public'))); // from this we can use public files and static files
// app.set('view engine', 'ejs'); // from this we can render ejs pages


// app.get("/", function(req,res){
//     res.render("index"); // in this we render index pages, we can find that in views folder
// })

// app.listen(3000,function(){
//     console.log("its running");
// })


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
const app = express(); 
const path = require('path');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'public'))); 
app.set('view engine', 'ejs'); 

app.get("/", function(req,res){
    res.render("index"); 
})

app.get("/profile/:username", function(req,res){
    res.send(`Welcome! ${req.params.username}`); // req.params.username; // this is how we can get the dynamic part of the url
})

app.get("/author/:username/:age", function(req,res){
    // res.send(req.params); // only data will be shown in this
    res.send(`Welcome! ${req.params.username}, you are ${req.params.age} years old.`); 
})

app.listen(3000,function(){
    console.log("its running");
})

 