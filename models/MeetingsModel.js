const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let meetings = new Schema(
  {
    name:{
        type : String
    },
    email:{
        type :String
    },
    phone:{
        type: Number      
    },
    topic:{
        type:String
    },
    start_time:{
        type: String
    },
    join_url: {
        type: String
    },
    start_link :{
        type: String
    },
    payment_id :{
        type :String
    }
  },
);
const Meetings = mongoose.model("Meetings", meetings);
module.exports = Meetings