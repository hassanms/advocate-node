const TimeEntries = require("../models/TimeEntriesModel");
const express = require("express");

const router = express.Router()

router.get('/', async (req, res) => {
    try {
      const timeEntries = await TimeEntries.find();
      res.status(200).json(timeEntries);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving timeEntries');
    }
  });
router.put('/', async (req, res) => {
    try {
      const timeEntries = req.body.data; // Assuming the timeEntries object is sent in the request body
      const updatedTimeEntries = await TimeEntries.findOneAndUpdate({},  { time_slots: timeEntries }, { new: true, upsert: true });
      res.status(200).json(updatedTimeEntries);
    } catch (error) {
      console.error(error);
      res.status(401).send('Error updating timeEntries');
    }
  });

 module.exports=(router)