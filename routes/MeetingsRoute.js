const Meetings = require("../models/MeetingsModel");
const express = require("express");

const router = express.Router()

router.get('/', async (req, res) => {
   try {
    const meetings = await Meetings.find()
    res.status(200).json(meetings)
   } catch (error) {
    res.status(401).send('meetings error')
   }
})
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
     const meetings = new Meetings ({
        name: req.body.data.name,
        email: req.body.data.email,
        topic: req.body.data.topic,
        phone: req.body.data.phone,
        start_time: req.body.data.start_time,
        join_link: req.body.data.join_link,
        start_link: req.body.data.start_link,
        payment_id :req.body.data.payment_id
     })
      await meetings.save();
      res.status(200).json('meeting Created')
    } catch (error) {
        res.status(401).send(' meetings not Created')
    }
 })

 module.exports=(router)