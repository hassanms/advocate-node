const mongoose = require("mongoose");
const express = require("express");
const app = express();
const meetings = require('./routes/MeetingsRoute')
const timeEntries = require('./routes/TimeEntriesRoute')
var cors = require('cors')
const port = 4000;

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var uri = "mongodb+srv://hassanmuhammadsaddique:m4C0CxIAO4dxtWOn@cluster0.fsllozj.mongodb.net/bookfair";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get('/',(req,res)=>{
    res.send('welcome')
})
app.use("/api/meetings", meetings);
app.use("/api/timeslots", timeEntries);

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});