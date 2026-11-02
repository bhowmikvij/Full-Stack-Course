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



