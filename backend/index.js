const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const musicRouter = require('./routers/music.router');
const userRouter = require('./routers/user.router');

//connect Url
var cors = require('cors');
mongoose.connect('mongodb://localhost:27017/music', {useNewUrlParser: true,useUnifiedTopology: true});
//method to connect to the server
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.get('/', function(req, res){
  res.send()
})
// var corsOptions = {
//     origin: 'http://localhost:3000/music',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use('/music',cors(), musicRouter);
app.use('/user',cors(), userRouter);

app.listen(3001);

