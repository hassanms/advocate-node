const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let TimeEntries = new Schema(
  {
   time_slots :{
    t1:{
      type :Boolean,
    },
    t2:{
      type :Boolean,
    },
    t3:{
      type :Boolean,
    },
    t4:{
      type :Boolean,
    },
    t5:{
      type :Boolean,
    },
    t6:{
      type :Boolean,
    },
    t7:{
      type :Boolean,
    },
    t8:{
      type :Boolean,
    },
    t9:{
      type :Boolean,
    },
    t10:{
      type :Boolean,
    },
    t11:{
      type :Boolean,
    },
    t12:{
      type :Boolean,
    },
    t13:{
      type :Boolean,
    },
    t14:{
      type :Boolean,
    },
    t15:{
      type :Boolean,
    },
    t16:{
      type :Boolean,
    },
   }

  },
);

module.exports = mongoose.model("TimeEntries", TimeEntries);