
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors')
var path = require('path')
// const cookieParser = require("cookie-parser")

var app = express();
require("dotenv").config()

const corsOptions = {
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization', "auth-token"],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: false,
}

app.use(cors(corsOptions))
app.use(express.json())
// app.use(cookieParser())
app.use(express.static(__dirname + "/public"))

var server = require('http').createServer(app)

app.use(express.static('client/build'));
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err))

mongoose.connection.on("connected", () => {
  console.log("connected successfully !!!")
})
mongoose.connection.on("error", () => {
  console.log("error")
})


//authentication route
var authRoute = require('./routes/auth')
app.use('/api/user', authRoute)

//chat room route
var chatRoomRoute = require('./routes/conversation')
app.use('/api/chatroom', chatRoomRoute)

//authentication route
var messageRoute = require('./routes/message')
app.use('/api/message', messageRoute)

const port = process.env.PORT || 4000
server.listen(port)
console.log('done')