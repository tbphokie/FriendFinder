var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8081;

/* Test to make sure route is working
app.get('/', function(req, res){
    res.send("Hello World");
});
*/

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true }));

//parse application/json
app.use(bodyParser.json());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use(bodyParser.text());

app.use(express.static('app/public'));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("app is listening on PORT: " + PORT);
});



